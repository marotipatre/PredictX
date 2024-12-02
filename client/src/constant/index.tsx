import React from "react";
export const oracleAbi=[
	{
		"inputs": [],
		"name": "read",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "readWithAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const oracleAddress="0xf90498Ecbcae79c5C9aAAA8364B193628942D851";
export const Addresses = {
  
  
  
  "84532": {
    name: "Base Sepolia",
    tokenAddress: "0x0e5D06e810Edca5fc273ca75D49F8D7c84137E4b",
    mainContractAddress: "0x2327b2aCa446a37A70Bbd02D81E9BE07EB5518FC",
  },
};


export const tokenAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ERC2612ExpiredSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC2612InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidAccountNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const mainContractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWon",
        type: "uint256",
      },
    ],
    name: "BetClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "targetScore",
        type: "uint256",
      },
    ],
    name: "BetPlaced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "claimedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "claimed",
        type: "bool",
      },
    ],
    name: "DebugClaim",
    type: "event",
  },
  {
    inputs: [],
    name: "FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bets",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetScore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimedAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "claimed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pool_id",
        type: "uint256",
      },
    ],
    name: "claimBet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_poolName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_poolDiscription",
        type: "string",
      },
    ],
    name: "createPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pool_id",
        type: "uint256",
      },
    ],
    name: "getBets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "targetScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "claimedAmount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct BuzziFi.Bet[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetScore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pool_id",
        type: "uint256",
      },
    ],
    name: "placeBet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "total_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total_bets",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "finalScore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "resultDeclareTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "poolEnded",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pool_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_finalScore",
        type: "uint256",
      },
    ],
    name: "setResult",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const exploreCoins = [
  {
    id: 1,
    type: "coin",
    name: "Bitcoin",
    symbol: "BTC",
    marketCap: "$1.80T",
    price: "$90843.81",
    change24h: "+6.2%",
    volume24h: "$35B",
    imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035",
    description:
      "The first and most well-known cryptocurrency, created by Satoshi Nakamoto.",
  },
  {
    id: 2,
    name: "Ethereum",
    type: "coin",
    symbol: "ETH",
    marketCap: "$401.17B",
    price: "$4,200",
    change24h: "+2.9%",
    volume24h: "$25B",
    imageUrl: "https://th.bing.com/th?id=OIP.cYkNALoVRKYMzHKX_XeXkAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    description:
      "A decentralized platform that enables smart contracts and decentralized applications (dapps) to be built and run without any downtime, fraud, control, or interference from a third party.",
  },
  {
    id: 3,
    name: "Binance Coin",
    type: "coin",
    symbol: "BNB",
    marketCap: "$91.90B",
    price: "$630.00",
    change24h: "+1.12%",
    volume24h: "$2.3B",
    imageUrl: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=035",
    description:
      "A utility token that allows you to pay for services on the Binance exchange.",
  },
  {
    id: 4,
    name: "DogeCoin",
    type: "coin",
    symbol: "ADA",
    marketCap: "$52.32B",
    price: "$0.3762",
    change24h: "+11.9%",
    volume24h: "$1.5B",
    imageUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=035",
    description:
      "A fun and friendly internet currency that has grown to become a popular digital currency.",
  },
  {
    id: 5,
    name: "Solana",
    type: "coin",
    symbol: "SOL",
    marketCap: "$103.63B",
    price: "$220.36",
    change24h: "+4.25%",
    volume24h: "$2.8B",
    imageUrl: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=035",
    description:
      "A fast, secure, and censorship-resistant blockchain providing the open infrastructure required for global adoption.",
  },
  {
    id: 6,
    name: "PePe",
    type: "coin",
    symbol: "PEPE",
    marketCap: "$9.43B",
    price: "$0.00002218",
    change24h: "+1.50%",
    volume24h: "$1.2B",
    imageUrl: "https://cryptologos.cc/logos/pepe-pepe-logo.svg?v=035",
    description:
      "A decentralized meme token that grew into a vibrant ecosystem of projects and communities.",
  },
  {
    id: 7,
    name: "Shiba Inu",
    type: "coin",
    symbol: "SHIB",
    marketCap: "$16.30B",
    price: "$0.00002509",
    change24h: "+2.05%",
    volume24h: "$1B",
    imageUrl: "https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=035",
    description:
      "A decentralized meme token that grew into a vibrant ecosystem of projects and communities.",
  },
  {
    id: 8,
    name: "BitCoin Cash",
    type: "coin",
    symbol: "BCH",
    marketCap: "$10.50B",
    price: "$550",
    change24h: "+0.5%",
    volume24h: "$800M",
    imageUrl: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg?v=035",
    description:
      "A peer-to-peer electronic cash system that aims to be a global payment system.",
  },
  {
    id: 9,
    name: "UniSwap",
    type: "coin",
    symbol: "UNI",
    marketCap: "$10.50B",
    price: "$25",
    change24h: "+1.5%",
    volume24h: "$500M",
    imageUrl: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=035",
    description:
      "A decentralized finance protocol that is used to exchange cryptocurrencies without the need for a centralized intermediary.",
  },
  {
    id: 10,
    name: "FlokiInu",
    type: "coin",
    symbol: "FLOKI",
    marketCap: "$2.36B",
    price: "$0.0002458",
    change24h: "+0.5%",
    volume24h: "$600M",
    imageUrl: "https://cryptologos.cc/logos/floki-inu-floki-logo.svg?v=035",
    description:
      "A decentralized meme token that grew into a vibrant ecosystem of projects and communities.",
  },
];

export const superfluidABI = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
    ],
    name: "deleteMemberFromPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_members",
        type: "address[]",
      },
      {
        internalType: "uint128[]",
        name: "_giveUnits",
        type: "uint128[]",
      },
    ],
    name: "giveUnits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "instantlyDistribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_acceptedToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "acceptedToken",
    outputs: [
      {
        internalType: "contract ISETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract ISuperfluidPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const superfluidAddress = "0x5AB8bc4DF926903334789EF126563e07560ff779";
export const superfluidPoolAddress =
  "0x85b817A9aDB057D99664bf93e936747B756488F2";
export const superTokenAddress = "0x143ea239159155B408e71CDbE836e8CFD6766732";
export const superfluidGDAForwarderAddress =
  "0x6DA13Bde224A05a288748d857b9e7DDEffd1dE08";
export const superfluidGDAForwarderAbi = [
  {
    inputs: [
      { internalType: "contract ISuperfluid", name: "host", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
      { internalType: "address", name: "memberAddress", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" },
    ],
    name: "claimAll",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
      { internalType: "bytes", name: "userData", type: "bytes" },
    ],
    name: "connectPool",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      { internalType: "address", name: "admin", type: "address" },
      {
        components: [
          {
            internalType: "bool",
            name: "transferabilityForUnitsOwner",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "distributionFromAnyAddress",
            type: "bool",
          },
        ],
        internalType: "struct PoolConfig",
        name: "config",
        type: "tuple",
      },
    ],
    name: "createPool",
    outputs: [
      { internalType: "bool", name: "success", type: "bool" },
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
      { internalType: "bytes", name: "userData", type: "bytes" },
    ],
    name: "disconnectPool",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      { internalType: "address", name: "from", type: "address" },
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
      { internalType: "uint256", name: "requestedAmount", type: "uint256" },
      { internalType: "bytes", name: "userData", type: "bytes" },
    ],
    name: "distribute",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      { internalType: "address", name: "from", type: "address" },
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
      { internalType: "int96", name: "requestedFlowRate", type: "int96" },
      { internalType: "bytes", name: "userData", type: "bytes" },
    ],
    name: "distributeFlow",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "contract ISuperfluidPool", name: "to", type: "address" },
      { internalType: "uint256", name: "requestedAmount", type: "uint256" },
    ],
    name: "estimateDistributionActualAmount",
    outputs: [
      { internalType: "uint256", name: "actualAmount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "contract ISuperfluidPool", name: "to", type: "address" },
      { internalType: "int96", name: "requestedFlowRate", type: "int96" },
    ],
    name: "estimateFlowDistributionActualFlowRate",
    outputs: [
      { internalType: "int96", name: "actualFlowRate", type: "int96" },
      {
        internalType: "int96",
        name: "totalDistributionFlowRate",
        type: "int96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "contract ISuperfluidPool", name: "to", type: "address" },
    ],
    name: "getFlowDistributionFlowRate",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "getNetFlow",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "getPoolAdjustmentFlowInfo",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "int96", name: "", type: "int96" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getPoolAdjustmentFlowRate",
    outputs: [{ internalType: "int96", name: "", type: "int96" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
      { internalType: "address", name: "member", type: "address" },
    ],
    name: "isMemberConnected",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidToken",
        name: "token",
        type: "address",
      },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "isPool",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISuperfluidPool",
        name: "pool",
        type: "address",
      },
      { internalType: "address", name: "memberAddress", type: "address" },
      { internalType: "uint128", name: "newUnits", type: "uint128" },
      { internalType: "bytes", name: "userData", type: "bytes" },
    ],
    name: "updateMemberUnits",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const features = [
  {
    id: "0",
    imageUrl: "/images/feature-1.png",
    url: "https://www.notion.so/Introduction-40fcce3d85434b7aafaac9567688bbbe?pvs=4",
    caption: "Betting on your favorite creators",
    title: "Getting FOMO of coin prizes",
    text: "Don't worry we are here to take your FOMO! Come to our platform and predict the your favorite coin prize if it's close or exact you're the winner of the pool.",
    button: {
      icon: "/images/magictouch.svg",
      title: "Watch the demo",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    url: "https://www.notion.so/Introduction-40fcce3d85434b7aafaac9567688bbbe?pvs=4",
    caption: "Wanna take your fanclub fights to next level?",
    title: "Use your sport knowledge to win",
    text: "Bet who will score more goals and runs in coming matches and win the pool.",
    button: {
      icon: "/images/docs.svg",
      title: "Read the docs",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "Limitless Bets",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Stratergise your bets",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "Chance to win big",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "Battle with your friends",
  },
];

export const faq = [
  {
    id: "0",
    question: "How does PredictX's score prediction system work?",
    answer:
      "The PredictX platform lets you predict a content creator’s social media performance using a unique score calculation based on metrics like views, likes, comments, and follower count. You select a score that reflects how viral you think their post or content will become. If your prediction matches or is within a specified range, you win rewards from the betting pool.",
  },
  {
    id: "1",
    question: "What factors influence a content creator’s score?",
    answer:
      "The score is based on real-time public data pulled from social media platforms. Key factors include: Views, Likes, Followers/Subscribers. The score is calculated using a proprietary algorithm that takes into account the creator’s historical performance and engagement metrics. The more accurate your prediction, the higher your chances of winning rewards.",
  },
  {
    id: "2",
    question: "How are the bets settled?",
    answer:
      "Easily!Once you place your bet by predicting a score, the betting pool runs for a selected time (1 day, 7 days, or 1 month). When the time ends, the score is calculated using the final metrics of the content.According to the diversion of the score from the actual score, the rewards are distributed among the winners.",
  },
  {
    id: "3",
    question: "How does the 1v1 creator battle work?",
    answer:
      "In the 1v1 battle mode, two content creators are pitted against each other. You simply bet on which creator you think will perform better in terms of social engagement. The creator with the higher final score wins, and so do the users who bet on them.",
  },
  {
    id: "4",
    question: "What happens if my prediction is wrong?",
    answer:
      "If your prediction is incorrect, you lose the amount you bet. But don’t worry,if you have predicted the score close to the actual score, you will get a portion of the rewards from the betting pool relatively.",
  },
  {
    id: "5",
    question: "What social media platforms does PredictX support?",
    answer:
      "Buzz-Fi supports predictions on content creators from: YouTube, Farcaster, Instagram. We are constantly adding new platforms to our list, so stay tuned for updates!",
  },
  {
    id: "6",
    question: "How are rewards distributed?",
    answer:
      "Rewards are distributed based on how accurately your prediction matches the actual score. If you predict perfectly, you’ll earn a larger share of the pool. Even if your prediction isn’t perfect but within the specified range, you can still win a share of the pool, which is split among successful participants.",
  },
  {
    id: "7",
    question: "How is the score verified and calculated on PredictX?",
    answer: (
      <>
        PredictX fetches real-time public data using decentralised oracles like chronicle and chainlink{" "}
        <a
          href="https://quickest-reaction-568.notion.site/Score-Mechanism-Randomness-Calculator-111a260a8fdc810ba9dcf4e86385e1e6"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    id: "8",
    question: "How does the pool distribution work if multiple users win?",
    answer:
      "When multiple users accurately predict the score within the specified range, the reward pool is split proportionally based on how close each user’s prediction was to the actual score. The closer your prediction, the larger your share of the pool. Users with far-off predictions will lose their stake, which is added to the pool for the winners.",
  },
  {
    id: "9",
    question: " What makes PredictX decentralized and secure",
    answer:
      "Absolutely! Buzz-Fi uses Superfluid to ensure a decentralized betting system where all transactions are handled by smart contracts. This eliminates any need for intermediaries, reducing the risk of manipulation or fraud. The betting, score calculation, and reward distribution processes are transparent and automatically executed on-chain, ensuring fairness and security for all users.",
  },
];

export const plans = [
  {
    id: "0",
    title: "Core",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for solo creators",
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Overdrive",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Team",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Exclusively for teams",
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
];

export const testimonials = [
  {
    id: "0",
    name: "Jessica Saunders",
    role: "Globalnomads",
    avatarUrl: "/images/testimonials/jessica-saunders.png",
    comment:
      "Xora's customer support is second to none! They’re like my tech superheroes, always there when I need them.",
  },
  {
    id: "1",
    name: "Mark Erixon",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/mark-erixon.png",
    comment:
      "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  },
  {
    id: "2",
    name: "Melanie Hurst",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/melanie-hurst.png",
    comment:
      "Adopting this software was a breeze. It's made everyday tasks so much simpler.",
  },
  {
    id: "3",
    name: "Alicia Barker",
    role: "Cyberleap",
    avatarUrl: "/images/testimonials/alicia-barker.png",
    comment:
      "The analytics feature is like having a personal fortune teller. It's been instrumental in guiding our business decisions.",
  },
  {
    id: "4",
    name: "Becky Snider",
    role: "Floclips",
    avatarUrl: "/images/testimonials/becky-snider.png",
    comment:
      "Switched to Xora last month, and I'm already seeing results. Best decision for our team!",
  },
  {
    id: "5",
    name: "Jim Bradley",
    role: "Vid capital intl",
    avatarUrl: "/images/testimonials/jim-bradley.png",
    comment:
      "The efficiency boost is undeniable. This platform has transformed our workflow, forever.",
  },
];

export const logos = [
 
  {
    id: "1",
    title: "Farcaster",
    url: "images/logos/transparent-white.svg",
    width: 50,
    height: 48,
  },
  {
    id: "2",
    title: "Instagram",
    url: "/images/socials/instagram.svg",
    width: 40,
    height: 40,
  },
  {
    id: "1",
    title: "Threads",
    url: "/images/socials/threads.svg",
    width: 40,
    height: 40,
  },
];

export const Ios: React.FC = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.9404 17.0175C24.9566 15.791 25.2903 14.5884 25.9105 13.5217C26.5307 12.4549 27.4173 11.5586 28.4876 10.9162C27.8077 9.96818 26.9106 9.18798 25.8677 8.63759C24.8249 8.0872 23.6649 7.78178 22.48 7.74559C19.9523 7.48658 17.5019 9.22215 16.2138 9.22215C14.9009 9.22215 12.9177 7.77131 10.7822 7.8142C9.40087 7.85777 8.05467 8.2499 6.87475 8.95239C5.69483 9.65487 4.72143 10.6438 4.04939 11.8227C1.13826 16.7431 3.3097 23.9744 6.09832 27.9516C7.49352 29.8992 9.12411 32.0746 11.2577 31.9975C13.3456 31.913 14.1253 30.6978 16.6456 30.6978C19.1424 30.6978 19.874 31.9975 22.0509 31.9484C24.2912 31.9129 25.7028 29.9922 27.049 28.0262C28.0514 26.6385 28.8228 25.1048 29.3345 23.4819C28.0329 22.9445 26.9222 22.0449 26.1408 20.8954C25.3594 19.7458 24.942 18.3971 24.9404 17.0175Z"
        fill="#EAEDFF"
      />
      <path
        d="M20.829 5.12933C22.0505 3.69777 22.6523 1.85774 22.5066 0C20.6403 0.191354 18.9165 1.0621 17.6784 2.43873C17.0731 3.11126 16.6095 3.89365 16.3141 4.74119C16.0187 5.58873 15.8973 6.4848 15.9569 7.37817C16.8903 7.38755 17.8138 7.19004 18.6577 6.8005C19.5017 6.41097 20.244 5.83956 20.829 5.12933Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};
export const Android = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.74 0.0459256L22.8329 10.1427L18.5589 14.2804L4.37614 0.543765C4.12087 0.295202 4.41704 -0.131925 4.72872 0.0394973L4.74 0.0459256Z"
        fill="#EAEDFF"
      />
      <path
        d="M1.8335 30.0342V1.96373C1.83368 1.90283 1.85161 1.84334 1.88505 1.79272C1.91848 1.7421 1.96592 1.70261 2.02142 1.67919C2.07692 1.65577 2.13801 1.64947 2.19703 1.66108C2.25606 1.67269 2.31038 1.70169 2.3532 1.74445L16.7828 15.9997L2.3532 30.2534C2.31038 30.2962 2.25606 30.3252 2.19703 30.3368C2.13801 30.3484 2.07692 30.3421 2.02142 30.3187C1.96592 30.2953 1.91848 30.2558 1.88505 30.2052C1.85161 30.1545 1.83368 30.0951 1.8335 30.0342Z"
        fill="#EAEDFF"
      />
      <path
        d="M4.37775 31.4555C4.12108 31.7041 4.41724 32.1312 4.73033 31.9598L4.74161 31.9534L22.8331 21.8566L18.5591 17.7175L4.37775 31.4555Z"
        fill="#EAEDFF"
      />
      <path
        d="M25.0844 11.3955L30.1368 14.214C31.5112 14.9832 31.5112 17.016 30.1368 17.7853L25.0844 20.6016L20.3338 15.9996L25.0844 11.3955Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Windows = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.674 2.64859L29.4077 0.0307338C30.3171 -0.165605 31.1678 0.603406 31.1678 1.63418V12.7273C31.1678 13.6272 30.5078 14.3635 29.7011 14.3635H17.9674C17.1607 14.3635 16.5006 13.6272 16.5006 12.7273V4.25204C16.5006 3.46669 16.9846 2.79585 17.674 2.64859Z"
        fill="#EAEDFF"
      />
      <path
        d="M17.674 29.3507L29.4077 31.9686C30.3171 32.1649 31.1678 31.3959 31.1678 30.3651V19.272C31.1678 18.3721 30.5078 17.6358 29.7011 17.6358H17.9674C17.1607 17.6358 16.5006 18.3721 16.5006 19.272V27.7473C16.5006 28.5326 16.9846 29.2035 17.674 29.3507Z"
        fill="#EAEDFF"
      />
      <path
        d="M11.7925 3.82676L2.99217 5.90466C2.31748 6.06827 1.8335 6.73912 1.8335 7.50811V12.7275C1.8335 13.6273 2.49352 14.3636 3.30021 14.3636H12.1005C12.9072 14.3636 13.5672 13.6273 13.5672 12.7275V5.41383C13.5672 4.38305 12.7018 3.5977 11.7925 3.82676Z"
        fill="#EAEDFF"
      />
      <path
        d="M2.99217 26.0948L11.7925 28.1727C12.7018 28.4018 13.5672 27.6164 13.5672 26.5856V19.272C13.5672 18.3721 12.9072 17.6358 12.1005 17.6358H3.30021C2.49352 17.6358 1.8335 18.3721 1.8335 19.272V24.4913C1.8335 25.2603 2.31748 25.9312 2.99217 26.0948Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const Web = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5484 0.847986C11.8284 2.95995 11.3164 5.15192 10.9164 7.34388C14.6285 6.92789 18.3727 6.92789 22.0848 7.34388C21.6848 5.15192 21.1728 2.97595 20.4528 0.847986C20.4307 0.759613 20.4238 0.686493 20.4164 0.607564C20.4131 0.572174 20.4097 0.535616 20.4048 0.495992C19.1567 0.191997 17.8447 0 16.5006 0C15.1405 0 13.8445 0.191997 12.5804 0.495992C12.5741 0.546895 12.5728 0.592737 12.5715 0.637543C12.5696 0.7054 12.5677 0.770896 12.5484 0.847986Z"
        fill="#EAEDFF"
      />
      <path
        d="M24.8211 7.67982C26.8852 8.03181 28.9172 8.52781 30.9333 9.1358C29.3493 5.82385 26.6771 3.15189 23.365 1.56792C23.989 3.56789 24.485 5.61585 24.8211 7.67982Z"
        fill="#EAEDFF"
      />
      <path
        d="M9.54034 30.2556C9.51633 30.2556 9.48833 30.2636 9.46033 30.2716C9.43233 30.2796 9.40433 30.2876 9.38033 30.2876C6.27619 28.7517 3.74809 26.2077 2.19602 23.1037C2.19602 23.0797 2.20402 23.0517 2.21202 23.0237C2.22002 22.9957 2.22802 22.9677 2.22802 22.9437C4.1801 23.5197 6.19619 23.9517 8.19628 24.2877C8.54829 26.3037 8.96431 28.3037 9.54034 30.2556Z"
        fill="#EAEDFF"
      />
      <path
        d="M30.8053 23.1197C29.2213 26.3037 26.5811 28.8797 23.365 30.4316C23.973 28.3997 24.485 26.3517 24.8211 24.2877C26.8372 23.9517 28.8212 23.5197 30.7733 22.9437C30.7637 22.9823 30.7772 23.0208 30.7896 23.0558C30.7977 23.079 30.8053 23.1006 30.8053 23.1197Z"
        fill="#EAEDFF"
      />
      <path
        d="M9.54041 1.74401C8.96438 3.69598 8.54836 5.67994 8.21235 7.69591C6.14826 8.01591 4.10017 8.5279 2.06808 9.13589C3.62015 5.91994 6.19626 3.27998 9.3804 1.69601C9.4044 1.69601 9.4324 1.70801 9.4604 1.72001C9.4884 1.73201 9.51641 1.74401 9.54041 1.74401Z"
        fill="#EAEDFF"
      />
      <path
        d="M7.84432 21.5836C5.63622 21.1836 3.46013 20.6716 1.34804 19.9516C1.27094 19.9324 1.20545 19.9305 1.13759 19.9286C1.09278 19.9273 1.04693 19.926 0.996021 19.9196C0.692008 18.6557 0.5 17.3597 0.5 15.9997C0.5 14.6557 0.692008 13.3437 0.996021 12.0958C1.03565 12.0908 1.07221 12.0874 1.1076 12.0841C1.18653 12.0767 1.25966 12.0699 1.34804 12.0478C3.47613 11.3438 5.63622 10.8158 7.84432 10.4158C7.4443 14.1277 7.4443 17.8717 7.84432 21.5836Z"
        fill="#EAEDFF"
      />
      <path
        d="M32.005 19.9196C32.309 18.6557 32.501 17.3597 32.501 15.9997C32.501 14.6557 32.309 13.3597 32.005 12.0958C31.877 12.0958 31.781 12.0798 31.653 12.0478C29.5409 11.3278 27.3488 10.8158 25.1567 10.4158C25.5727 14.1277 25.5727 17.8717 25.1567 21.5836C27.3488 21.1836 29.5249 20.6556 31.653 19.9516C31.7301 19.9324 31.7956 19.9305 31.8635 19.9286C31.9083 19.9273 31.9541 19.926 32.005 19.9196Z"
        fill="#EAEDFF"
      />
      <path
        d="M22.0848 24.6554C21.6848 26.8633 21.1728 29.0393 20.4528 31.1513C20.4307 31.2396 20.4238 31.3128 20.4164 31.3917C20.4131 31.4271 20.4097 31.4636 20.4048 31.5033C19.1567 31.8073 17.8447 31.9993 16.5006 31.9993C15.1405 31.9993 13.8445 31.8073 12.5804 31.5033C12.5741 31.4524 12.5728 31.4065 12.5715 31.3617C12.5696 31.2939 12.5677 31.2284 12.5484 31.1513C11.8444 29.0233 11.3164 26.8633 10.9164 24.6554C12.7724 24.8634 14.6285 25.0074 16.5006 25.0074C18.3727 25.0074 20.2448 24.8634 22.0848 24.6554Z"
        fill="#EAEDFF"
      />
      <path
        d="M10.4793 22.0209C14.4812 22.5258 18.5205 22.5258 22.5224 22.0209C23.0274 18.0192 23.0274 13.9802 22.5224 9.97847C18.5205 9.47358 14.4812 9.47358 10.4793 9.97847C9.97434 13.9802 9.97434 18.0192 10.4793 22.0209Z"
        fill="#EAEDFF"
      />
    </svg>
  );
};

export const links = [
  {
    id: "0",
    title: "Ios",
    icon: <Ios />,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: <Android />,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: <Windows />,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: <Web />,
    url: "#",
  },
];

export const socials = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];

export const exploreItems = [
  {
    id: 1,
    type: "creator",
    name: "Donald Trump",
    imageUrl:
      "https://th.bing.com/th/id/OIP.mzHrHGZ3VedhnS1Kqlc0vQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "45th President of the United States and a businessman",
    followers: 10000000,
  },
  {
    id: 2,
    name: "Andrew Tate",
    type: "creator",
    imageUrl:
      "https://th.bing.com/th/id/OIP.62NcRAyMg8CUrm2llav6IAHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "British-American entrepreneur and former kickboxer",
    followers: 5000000,
  },
  {
    id: 3,
    name: "Ronaldo",
    type: "creator",
    imageUrl:
      "https://th.bing.com/th/id/OIP.gXZoTIumD6EGpUsNXDm-QwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Portuguese professional footballer",
    followers: 200000000,
  },
  {
    id: 4,
    name: "Don Romero",
    type: "creator",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRW47le8ZbNblIZFpeWYAfl8ZNY43nObhlA&s",
    description: "Farcaster Creator",
    followers: 270156,
  },
  {
    id: 5,
    name: "PewDiePie",
    type: "creator",
    imageUrl:
      "https://i.guim.co.uk/img/media/9d9759a25269ff4dd7f4c41bde320c4928bdfb65/0_24_3000_1800/master/3000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e4916223d76a56180788e7bfc1d25b02",
    description: "Popular Youtuber",
    followers: 110000000,
  },
  {
    id: 6,
    name: "Greg",
    type: "creator",
    imageUrl:
      "https://pbs.twimg.com/profile_images/972210365198143493/R3bpWPqJ_400x400.jpg",
    description: "CTO @ http://scorechain.com",
    followers: 26512,
  },
];

export const exploresports = [
  {
    id: 1,
    name: "Ronaldo",
    type: "sport",
    imageUrl:
      "https://th.bing.com/th/id/OIP.gXZoTIumD6EGpUsNXDm-QwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Portuguese professional footballer",
    followers: 200000000,
  },
  {
    id: 2,
    name: "Lionel Messi",
    type: "sport",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Igfu45-WCcqJYVD9-t9-cQHaEo?w=299&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Argentine professional footballer",
    followers: 150000000,
  },
  {
    id: 3,
    type: "sport",
    name: "Neymar Jr",
    imageUrl:
      "https://th.bing.com/th/id/OIP.MVZEWOQlf5LYQw0r-9cjhwHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "Brazilian professional footballer",
    followers: 100000000,
  },
  {
    id: 4,
    name: "Cole Palmer",
    type: "sport",
    imageUrl:
      "https://th.bing.com/th/id/OIP.1i4vfd_q0b_GBZNwDRLrOQHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "English professional footballer",
    followers: 5000000,
  },
  {
    id: 5,
    name: "MSD Dhoni",
    type: "sport",
    imageUrl:
      "https://th.bing.com/th/id/OIP.qdWXCUJqnFmTbq7tfEDd_gHaNK?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "GOAT Indian cricketer",
    followers: 20000000,
  },
  {
    id: 6,
    name: "Glenn Maxwell",
    type: "sport",
    imageUrl:
      "https://th.bing.com/th/id/OIP.TVPEAqCHDg0L_Lhbpp_f4QHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    description: "One of the best Australian cricketer",
    followers: 10000000,
  },
];
export const footballLeagues = [
  {
    id: 1,
    leagueName: "Ronaldo's Goal Predictions",
    description: "Predict how many goals Cristiano Ronaldo will score in this match.",
    example: "Over/Under 1.5 goals",
    imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
    type:"league"

  },
  {
    id: 2,
    leagueName: "Total Goals in Match",
    description: "Predict the total number of goals scored by both teams in the match.",
    example: "Over/Under 2.5 goals",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
  {
    id: 3,
    leagueName: "Messi's Goal Predictions",
    description: "Predict how many goals Lionel Messi will score in this match.",
    example: "Over/Under 0.5 goals",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
  {
    id: 4,
    leagueName: "First Goal Scorer",
    description: "Predict which player will score the first goal in the match.",
    example: "Ronaldo/Messi/Other",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
  {
    id: 5,
    leagueName: "Both Teams to Score",
    description: "Predict whether both teams will score in this match.",
    example: "Yes/No",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
  {
    id: 6,
    leagueName: "Winning Margin",
    description: "Predict the goal margin by which the winning team will win.",
    example: "1 goal/2 goals/3+ goals",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
  {
    id: 7,
    leagueName: "Hat-trick Predictions",
    description: "Predict whether a player will score a hat-trick in the match.",
    example: "Yes/No",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
  {
    id: 8,
    leagueName: "Total Corner Kicks",
    description: "Predict the total number of corner kicks in the match.",
    example: "Over/Under 9.5 corners",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
  {
    id: 9,
    leagueName: "Penalty Kick Predictions",
    description: "Predict whether a penalty kick will be awarded in the match.",
    example: "Yes/No",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
  {
    id: 10,
    leagueName: "Final Match Score",
    description: "Predict the final score of the match.",
    example: "2-1/1-1/3-0",
     imageUrl:"https://n9z9m6k7.rocketcdn.me/wp-content/uploads/2023/01/fantasy-sports-for-sports-leagues.png",
     type:"league"
  },
];
