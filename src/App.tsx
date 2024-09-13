import { useAccount, useConnect, useDisconnect, useReadContracts, useWriteContract } from 'wagmi'
import { encodeFunctionData, erc20Abi, formatEther, maxUint256 } from 'viem'
import type { Address } from 'viem'
import type React from 'react'
import { Fragment, useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { arbitrum } from 'viem/chains'
import { SPOT_MARKET_ABI, ARBITRUM_SPOT_MARKET } from './abi/SpotMarketProxy'
import { TrustedMulticallForwarderAbi } from './abi/TrustedMulticallForwarder'
import { ARB_sETH_ADDRESS, ARB_sETH_MARKET_ID, ARB_stBTC_ADDRESS, ARB_stBTC_MARKET_ID, TrustedMulticallForwarderAddress } from './constants'
import { EvmPriceServiceConnection } from '@pythnetwork/pyth-evm-js'
import { pythAbi } from './abi/pyth'
import { readContract } from 'wagmi/actions'
import { config } from './wagmi'
function App() {
  const queryClient = useQueryClient();
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { data: hash, error: txError, isPending, writeContract } = useWriteContract()
  const [txHashArray, setTxHashArray] = useState(Array<`0x${string}` | undefined>)
  const { disconnect } = useDisconnect()
  const pyth = {
    address: '0xff1a0f4744e8582DF1aE09D5611b887B6a12925C',
    abi: pythAbi
  } as const;
  const pyth_price_service = new EvmPriceServiceConnection('https://hermes.pyth.network/')
  const tbtc_feed_id = '0x56a3121958b01f99fdc4e1fd01e81050602c7ace3a571918bb55c6a96657cca9' as const;
  const synths = [
    {
      name: 'stBTC',
      address: ARB_stBTC_ADDRESS,
      abi: erc20Abi,
      marketId: ARB_stBTC_MARKET_ID
    },
    {
      name: 'sETH',
      address: ARB_sETH_ADDRESS,
      abi: erc20Abi,
      marketId: ARB_sETH_MARKET_ID
    }
  ] as const;
  const SpotMarket = {
    address: ARBITRUM_SPOT_MARKET,
    abi: SPOT_MARKET_ABI
  } as const;
  const approval = useReadContracts({
    contracts:
      synths.map((synth) => {
        return {
          ...synth,
          functionName: 'allowance',
          args: [account.address, SpotMarket.address]
        } as const;
      })
  })

  const balance = useReadContracts({
    contracts:
      synths.map((synth) => {
        return {
          ...synth,
          functionName: 'balanceOf',
          args: [account.address]
        } as const;
      })
  })
  function correctChain(id: number) {
    return account.chainId === id
  }

  async function approveArbitraryUnlimited(e: React.MouseEvent, tokenAddress: Address, approveTo: Address) {
    e.preventDefault()
    writeContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: 'approve',
      args: [
        approveTo, maxUint256
      ]
    })
  }

  async function unwrapSynths(e: React.MouseEvent) {
    e.preventDefault();
    const multicall = Array<{ target: Address, requireSuccess: boolean, value: bigint, callData: `0x${string}` }>();
    for (let i = 0; i < synths.length; i++) {
      if (balance.data !== undefined && balance.data[i].result !== undefined && balance.data[i].result! > 0n) {
        multicall.push(
          {
            target: SpotMarket.address,
            requireSuccess: true,
            value: 0n,
            callData: encodeFunctionData({
              abi: SpotMarket.abi,
              functionName: 'unwrap',
              args: [synths[i].marketId, balance.data[i].result!, 0n]
            })
          })
      }
    }
    const priceUpdate = await pyth_price_service.getPriceFeedsUpdateData([tbtc_feed_id]);
      console.log(priceUpdate);
      const fee = await readContract(config, {
        ...pyth,
        functionName: 'getUpdateFee',
        args: [priceUpdate]
      })
      console.log(multicall);
      multicall.unshift(
        {
          target: pyth.address,
          requireSuccess: true,
          value: fee as bigint,
          callData: encodeFunctionData(
            {abi: pyth.abi,
            functionName: 'updatePriceFeeds',
            args: [priceUpdate]}
          )
        }
      )
    writeContract({
      address: TrustedMulticallForwarderAddress,
      abi: TrustedMulticallForwarderAbi,
      functionName: 'aggregate3Value',
      value: fee as bigint,
      args: [multicall]
    })
  }

  useEffect(() => {
    setInterval(() => {
      queryClient.invalidateQueries()
    }, 10000)
    setTxHashArray([...txHashArray, hash])
  }, [hash])
  return (
    <>
      <div>
        <h2>unwrap sETH and stBTC</h2>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {(account.status === 'connected' || account.status === 'reconnecting') && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      {account.isDisconnected && <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
      </div>}
      {status === 'error' && <div>{error.message}</div>}
      <div>
        {account.isConnected && balance.isSuccess && synths.map((s, i) => {
          return <Fragment key={s.name}>
            <span>{s.name} balance: {formatEther(balance.data[i].result as bigint)}</span>
            <br />
          </Fragment>
        })}
      </div>
      <div>
        {account.isConnected && balance.isSuccess && approval.isSuccess && synths.map((s, i) => {
          return <Fragment key={s.name}>
            <span>{s.name} approval: {(approval.data[i].result as bigint) > (balance.data[i].result as bigint) ? 'ready' : 'not yet approved'} ({formatEther(approval.data[i].result as bigint)})</span><br />
          </Fragment>
        })}
      </div>
      {!correctChain}<span>Connect to Arbitrum One to write</span>
      <div>
        {synths.map((s) => {
          return <button key={s.name} onClick={(e) => approveArbitraryUnlimited(e, s.address, SpotMarket.address)} disabled={!correctChain(arbitrum.id)}>Approve {s.name} to Spot Market</button>
        })}
      </div>
      <button onClick={(e) => unwrapSynths(e)} disabled={!correctChain(arbitrum.id)}>Unwrap {synths.map((s, i, arr) => {
        if (i + 1 !== arr.length) {
          return `${s.name}, `
        }
        else {
          return s.name
        }
      })}</button>
      <br />
      {txError && (
        <span>{txError.message}</span>
      )}

      {isPending && (
        <span>Waiting for tx: <a href={`${account.chain?.blockExplorers.default.url}/tx/${hash}`}>{hash}</a></span>
      )}
      <div>
        {synths.map((s) => (
          <Fragment key={s.name}><span>{s.name} <a href={`${arbitrum.blockExplorers.default.url}/address/${s.address}`}>{s.address}</a></span><br /></Fragment>
        ))
        }
        <span>Spot Market: <a href={`${arbitrum.blockExplorers.default.url}/address/${SpotMarket.address}`}>{SpotMarket.address}</a></span>
      </div>
    </>
  )
}

export default App
