const SpotMarket = {
  "address": "0xa65538A6B9A8442854dEcB6E3F85782C60757D60",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "ImplementationIsSterile",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NoChange",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "contr",
          "type": "address"
        }
      ],
      "name": "NotAContract",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "NotNominated",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "Unauthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UpgradeSimulationFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ZeroAddress",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerNominated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "self",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newNominatedOwner",
          "type": "address"
        }
      ],
      "name": "nominateNewOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nominatedOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceNomination",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "simulateUpgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "which",
          "type": "bytes32"
        }
      ],
      "name": "FeatureUnavailable",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMarketOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "synthImplementation",
          "type": "uint256"
        }
      ],
      "name": "InvalidSynthImplementation",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "txnType",
          "type": "uint128"
        }
      ],
      "name": "InvalidTransactionTypeIndex",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "expected",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "actual",
          "type": "bytes32"
        }
      ],
      "name": "MismatchAssociatedSystemKind",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "MissingAssociatedSystem",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "marketOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "OnlyMarketOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OverflowInt256ToUint256",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "kind",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "proxy",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "impl",
          "type": "address"
        }
      ],
      "name": "AssociatedSystemSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rate",
          "type": "uint256"
        }
      ],
      "name": "DecayRateUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nominee",
          "type": "address"
        }
      ],
      "name": "MarketNominationRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "MarketOwnerChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "MarketOwnerNominated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "synthImplementation",
          "type": "address"
        }
      ],
      "name": "SynthImplementationSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "proxy",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "SynthImplementationUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "buyFeedId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "sellFeedId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "strictStalenessTolerance",
          "type": "uint256"
        }
      ],
      "name": "SynthPriceDataUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "synthTokenAddress",
          "type": "address"
        }
      ],
      "name": "SynthRegistered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "synthetix",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "usdTokenAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "oracleManager",
          "type": "address"
        }
      ],
      "name": "SynthetixSystemSet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "acceptMarketOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tokenSymbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "synthOwner",
          "type": "address"
        }
      ],
      "name": "createSynth",
      "outputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "getAssociatedSystem",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "kind",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "getMarketOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "marketOwner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "getNominatedMarketOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "marketOwner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "getPriceData",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "buyFeedId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "sellFeedId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "strictPriceStalenessTolerance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "getSynth",
      "outputs": [
        {
          "internalType": "address",
          "name": "synthAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "getSynthImpl",
      "outputs": [
        {
          "internalType": "address",
          "name": "implAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "transactionType",
          "type": "uint128"
        },
        {
          "internalType": "enum Price.Tolerance",
          "name": "priceTolerance",
          "type": "uint8"
        }
      ],
      "name": "indexPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "impl",
          "type": "address"
        }
      ],
      "name": "initOrUpgradeNft",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "decimals",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "impl",
          "type": "address"
        }
      ],
      "name": "initOrUpgradeToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "minimumCredit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lockedAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "marketName",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "newNominatedOwner",
          "type": "address"
        }
      ],
      "name": "nominateMarketOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "id",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "endpoint",
          "type": "address"
        }
      ],
      "name": "registerUnmanagedSystem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "renounceMarketNomination",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "renounceMarketOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "reportedDebt",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "reportedDebtAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "rate",
          "type": "uint256"
        }
      ],
      "name": "setDecayRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "synthImplementation",
          "type": "address"
        }
      ],
      "name": "setSynthImplementation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract ISynthetixSystem",
          "name": "synthetix",
          "type": "address"
        }
      ],
      "name": "setSynthetix",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isSupported",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "bytes32",
          "name": "buyFeedId",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "sellFeedId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "strictPriceStalenessTolerance",
          "type": "uint256"
        }
      ],
      "name": "updatePriceData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "upgradeSynthImpl",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "maxSynthAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "synthAmountCharged",
          "type": "uint256"
        }
      ],
      "name": "ExceedsMaxSynthAmount",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "maxUsdAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "usdAmountCharged",
          "type": "uint256"
        }
      ],
      "name": "ExceedsMaxUsdAmount",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "expected",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "current",
          "type": "uint256"
        }
      ],
      "name": "InsufficientAmountReceived",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "InvalidMarket",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPrices",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OverflowUint256ToInt256",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "synthReturned",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "indexed": false,
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collectedFees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "SynthBought",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountReturned",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "indexed": false,
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collectedFees",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "SynthSold",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "usdAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minAmountReceived",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "buy",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "synthAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "usdAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minAmountReceived",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "buyExactIn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "synthAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "synthAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxUsdAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "buyExactOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "usdAmountCharged",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "getMarketSkew",
      "outputs": [
        {
          "internalType": "int256",
          "name": "marketSkew",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "usdAmount",
          "type": "uint256"
        },
        {
          "internalType": "enum Price.Tolerance",
          "name": "stalenessTolerance",
          "type": "uint8"
        }
      ],
      "name": "quoteBuyExactIn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "synthAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "synthAmount",
          "type": "uint256"
        },
        {
          "internalType": "enum Price.Tolerance",
          "name": "stalenessTolerance",
          "type": "uint8"
        }
      ],
      "name": "quoteBuyExactOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "usdAmountCharged",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "synthAmount",
          "type": "uint256"
        },
        {
          "internalType": "enum Price.Tolerance",
          "name": "stalenessTolerance",
          "type": "uint8"
        }
      ],
      "name": "quoteSellExactIn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "returnAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "usdAmount",
          "type": "uint256"
        },
        {
          "internalType": "enum Price.Tolerance",
          "name": "stalenessTolerance",
          "type": "uint8"
        }
      ],
      "name": "quoteSellExactOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "synthToBurn",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "synthAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minUsdAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "sell",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "usdAmountReceived",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "synthAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minAmountReceived",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "sellExactIn",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "returnAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "usdAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxSynthAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "sellExactOut",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "synthToBurn",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expirationTime",
          "type": "uint256"
        }
      ],
      "name": "IneligibleForCancellation",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "expected",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "actual",
          "type": "uint256"
        }
      ],
      "name": "InsufficientSharesAmount",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum Transaction.Type",
          "name": "transactionType",
          "type": "uint8"
        }
      ],
      "name": "InvalidAsyncTransactionType",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "asyncOrderId",
          "type": "uint256"
        }
      ],
      "name": "InvalidClaim",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minimumAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "InvalidCommitmentAmount",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "settlementStrategyId",
          "type": "uint256"
        }
      ],
      "name": "InvalidSettlementStrategy",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "asyncOrderId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "settledAt",
          "type": "uint256"
        }
      ],
      "name": "OrderAlreadySettled",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "asyncOrderId",
          "type": "uint128"
        },
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "id",
              "type": "uint128"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "enum Transaction.Type",
              "name": "orderType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "amountEscrowed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settlementStrategyId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "commitmentTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumSettlementAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settledAt",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "referrer",
              "type": "address"
            }
          ],
          "indexed": false,
          "internalType": "struct AsyncOrderClaim.Data",
          "name": "asyncOrderClaim",
          "type": "tuple"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "OrderCancelled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "indexed": true,
          "internalType": "enum Transaction.Type",
          "name": "orderType",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountProvided",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "asyncOrderId",
          "type": "uint128"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "OrderCommitted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "asyncOrderId",
          "type": "uint128"
        }
      ],
      "name": "cancelOrder",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "enum Transaction.Type",
          "name": "orderType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "amountProvided",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "settlementStrategyId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minimumSettlementAmount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "commitOrder",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "id",
              "type": "uint128"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "enum Transaction.Type",
              "name": "orderType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "amountEscrowed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settlementStrategyId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "commitmentTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumSettlementAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settledAt",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "referrer",
              "type": "address"
            }
          ],
          "internalType": "struct AsyncOrderClaim.Data",
          "name": "asyncOrderClaim",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "asyncOrderId",
          "type": "uint128"
        }
      ],
      "name": "getAsyncOrderClaim",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "id",
              "type": "uint128"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "enum Transaction.Type",
              "name": "orderType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "amountEscrowed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settlementStrategyId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "commitmentTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumSettlementAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settledAt",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "referrer",
              "type": "address"
            }
          ],
          "internalType": "struct AsyncOrderClaim.Data",
          "name": "asyncOrderClaim",
          "type": "tuple"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum SettlementStrategy.Type",
          "name": "strategyType",
          "type": "uint8"
        }
      ],
      "name": "InvalidSettlementStrategy",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidVerificationResponse",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "minimum",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "actual",
          "type": "uint256"
        }
      ],
      "name": "MinimumSettlementAmountNotMet",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "expirationTime",
          "type": "uint256"
        }
      ],
      "name": "OutsideSettlementWindow",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OverflowUint256ToUint64",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "enum SettlementStrategy.Type",
          "name": "strategyType",
          "type": "uint8"
        }
      ],
      "name": "SettlementStrategyNotFound",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "asyncOrderId",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "finalOrderAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "indexed": false,
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collectedFees",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "settler",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "enum Transaction.Type",
          "name": "orderType",
          "type": "uint8"
        }
      ],
      "name": "OrderSettled",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "asyncOrderId",
          "type": "uint128"
        }
      ],
      "name": "settleOrder",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "finalOrderAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "duration",
          "type": "uint256"
        }
      ],
      "name": "InvalidSettlementWindowDuration",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        }
      ],
      "name": "SettlementStrategyAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "enum SettlementStrategy.Type",
              "name": "strategyType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "settlementDelay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settlementWindowDuration",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceVerificationContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "feedId",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "settlementReward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "priceDeviationTolerance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumUsdExchangeAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxRoundingLoss",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "disabled",
              "type": "bool"
            }
          ],
          "indexed": false,
          "internalType": "struct SettlementStrategy.Data",
          "name": "strategy",
          "type": "tuple"
        }
      ],
      "name": "SettlementStrategySet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "components": [
            {
              "internalType": "enum SettlementStrategy.Type",
              "name": "strategyType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "settlementDelay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settlementWindowDuration",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceVerificationContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "feedId",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "settlementReward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "priceDeviationTolerance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumUsdExchangeAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxRoundingLoss",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "disabled",
              "type": "bool"
            }
          ],
          "internalType": "struct SettlementStrategy.Data",
          "name": "strategy",
          "type": "tuple"
        }
      ],
      "name": "addSettlementStrategy",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        }
      ],
      "name": "getSettlementStrategy",
      "outputs": [
        {
          "components": [
            {
              "internalType": "enum SettlementStrategy.Type",
              "name": "strategyType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "settlementDelay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settlementWindowDuration",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceVerificationContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "feedId",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "settlementReward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "priceDeviationTolerance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumUsdExchangeAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxRoundingLoss",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "disabled",
              "type": "bool"
            }
          ],
          "internalType": "struct SettlementStrategy.Data",
          "name": "settlementStrategy",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "enum SettlementStrategy.Type",
              "name": "strategyType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "settlementDelay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "settlementWindowDuration",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceVerificationContract",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "feedId",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "settlementReward",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "priceDeviationTolerance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumUsdExchangeAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxRoundingLoss",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "disabled",
              "type": "bool"
            }
          ],
          "internalType": "struct SettlementStrategy.Data",
          "name": "strategy",
          "type": "tuple"
        }
      ],
      "name": "setSettlementStrategy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setSettlementStrategyEnabled",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "FailedTransfer",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "configuredCollateralType",
          "type": "address"
        }
      ],
      "name": "InvalidCollateralType",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "maxWrappableAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentSupply",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountToWrap",
          "type": "uint256"
        }
      ],
      "name": "WrapperExceedsMaxAmount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountUnwrapped",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "indexed": false,
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feesCollected",
          "type": "uint256"
        }
      ],
      "name": "SynthUnwrapped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountWrapped",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "indexed": false,
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "feesCollected",
          "type": "uint256"
        }
      ],
      "name": "SynthWrapped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "wrapCollateralType",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maxWrappableAmount",
          "type": "uint256"
        }
      ],
      "name": "WrapperSet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        }
      ],
      "name": "getWrapper",
      "outputs": [
        {
          "internalType": "address",
          "name": "wrapCollateralType",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "maxWrappableAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "wrapCollateralType",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "maxWrappableAmount",
          "type": "uint256"
        }
      ],
      "name": "setWrapper",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "unwrapAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minAmountReceived",
          "type": "uint256"
        }
      ],
      "name": "unwrap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "returnCollateralAmount",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "wrapAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "minAmountReceived",
          "type": "uint256"
        }
      ],
      "name": "wrap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountToMint",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "fixedFees",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "utilizationFees",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "skewFees",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "wrapperFees",
              "type": "int256"
            }
          ],
          "internalType": "struct OrderFees.Data",
          "name": "fees",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "InvalidCollateralLeverage",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "invalidFeeCollector",
          "type": "address"
        }
      ],
      "name": "InvalidFeeCollectorInterface",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidWrapperFees",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "asyncFixedFee",
          "type": "uint256"
        }
      ],
      "name": "AsyncFixedFeeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "atomicFixedFee",
          "type": "uint256"
        }
      ],
      "name": "AtomicFixedFeeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "collateralLeverage",
          "type": "uint256"
        }
      ],
      "name": "CollateralLeverageSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "feeCollector",
          "type": "address"
        }
      ],
      "name": "FeeCollectorSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "skewScale",
          "type": "uint256"
        }
      ],
      "name": "MarketSkewScaleSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "utilizationFeeRate",
          "type": "uint256"
        }
      ],
      "name": "MarketUtilizationFeesSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint128",
          "name": "marketId",
          "type": "uint128"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePercentage",
          "type": "uint256"
        }
      ],
      "name": "ReferrerShareUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "transactor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fixedFeeAmount",
          "type": "uint256"
        }
      ],
      "name": "TransactorFixedFeeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "synthMarketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "wrapFee",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "unwrapFee",
          "type": "int256"
        }
      ],
      "name": "WrapperFeesSet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "getCollateralLeverage",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "collateralLeverage",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "transactor",
          "type": "address"
        }
      ],
      "name": "getCustomTransactorFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "fixedFeeAmount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "getFeeCollector",
      "outputs": [
        {
          "internalType": "address",
          "name": "feeCollector",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "getMarketFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "atomicFixedFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "asyncFixedFee",
          "type": "uint256"
        },
        {
          "internalType": "int256",
          "name": "wrapFee",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "unwrapFee",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "getMarketSkewScale",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "skewScale",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        }
      ],
      "name": "getMarketUtilizationFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "utilizationFeeRate",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "getReferrerShare",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "sharePercentage",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "asyncFixedFee",
          "type": "uint256"
        }
      ],
      "name": "setAsyncFixedFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "atomicFixedFee",
          "type": "uint256"
        }
      ],
      "name": "setAtomicFixedFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "collateralLeverage",
          "type": "uint256"
        }
      ],
      "name": "setCollateralLeverage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "transactor",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "fixedFeeAmount",
          "type": "uint256"
        }
      ],
      "name": "setCustomTransactorFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "feeCollector",
          "type": "address"
        }
      ],
      "name": "setFeeCollector",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "skewScale",
          "type": "uint256"
        }
      ],
      "name": "setMarketSkewScale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "uint256",
          "name": "utilizationFeeRate",
          "type": "uint256"
        }
      ],
      "name": "setMarketUtilizationFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "int256",
          "name": "wrapFee",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "unwrapFee",
          "type": "int256"
        }
      ],
      "name": "setWrapperFees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint128",
          "name": "synthMarketId",
          "type": "uint128"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "sharePercentage",
          "type": "uint256"
        }
      ],
      "name": "updateReferrerShare",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ValueAlreadyInSet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ValueNotInSet",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "allowAll",
          "type": "bool"
        }
      ],
      "name": "FeatureFlagAllowAllSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "FeatureFlagAllowlistAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "FeatureFlagAllowlistRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "deniers",
          "type": "address[]"
        }
      ],
      "name": "FeatureFlagDeniersReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "denyAll",
          "type": "bool"
        }
      ],
      "name": "FeatureFlagDenyAllSet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addToFeatureFlagAllowlist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        }
      ],
      "name": "getDeniers",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        }
      ],
      "name": "getFeatureFlagAllowAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        }
      ],
      "name": "getFeatureFlagAllowlist",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        }
      ],
      "name": "getFeatureFlagDenyAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isFeatureAllowed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "removeFromFeatureFlagAllowlist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "internalType": "address[]",
          "name": "deniers",
          "type": "address[]"
        }
      ],
      "name": "setDeniers",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "allowAll",
          "type": "bool"
        }
      ],
      "name": "setFeatureFlagAllowAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "feature",
          "type": "bytes32"
        },
        {
          "internalType": "bool",
          "name": "denyAll",
          "type": "bool"
        }
      ],
      "name": "setFeatureFlagDenyAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "deployTxnHash": "",
  "deployTxnBlockNumber": "",
  "deployTimestamp": "",
  "sourceName": "",
  "contractName": "",
  "deployedOn": "invoke.upgradeSpotMarketProxy",
  "gasUsed": 0,
  "gasCost": "0",
  "highlight": true
} as const;

export const ARBITRUM_SPOT_MARKET = SpotMarket.address
export const SPOT_MARKET_ABI = SpotMarket.abi