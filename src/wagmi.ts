import { http, createConfig } from 'wagmi'
import { arbitrum } from 'wagmi/chains'
import { coinbaseWallet, injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [arbitrum],
  connectors: [
    injected(),
    coinbaseWallet(),

  ],
  transports: {
    [arbitrum.id]: http()
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
