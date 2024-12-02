import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
const SHIMMER_EVM_TESTNET_RPC_URL = "https://json-rpc.evm.testnet.shimmer.network";
const SHIMMER_EVM_MAINNET_RPC_URL = "https://json-rpc.evm.shimmer.network";

const IOTA_EVM_TESTNET_RPC_URL = "https://json-rpc.evm.testnet.iotaledger.net";
const IOTA_EVM_MAINNET_RPC_URL = "https://json-rpc.evm.iotaledger.net";

const ACCOUNTS = process.env.DEPLOYER_ACCOUNT_PRIV_KEY
  ? [`${process.env.DEPLOYER_ACCOUNT_PRIV_KEY}`]
  : [];

module.exports = {
  defaultNetwork: "hardhat",
  gasReporter: {
    enabled: false,
  },
  networks: {
    hardhat: { chainId: 31337 },
    
    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.public.blastapi.io",
      accounts: ACCOUNTS,
    },
    ethereum: {
      chainId: 1,
      url: "https://eth.llamarpc.com",
      accounts: ACCOUNTS,
    },
  
    base: {
      chainId: 8453,
      url: "https://base.drpc.org",
      accounts: ACCOUNTS,
    },
    baseSepolia:{
      chainId: 84532,
      url:"https://sepolia.base.org",
      accounts: ACCOUNTS,
    },
    
  },
  etherscan: {
    apiKey: {
      sepolia: "8GTWGADU386IDWFIDRGYT2U5BJWH4XUS2N",
      base: "8GTWGADU386IDWFIDRGYT2U5BJWH4XUS2N",
      baseSepolia:"8VP9YW357XEY3FW4T5HEM84BNHV15KYHW6",
    },
    customChains: [
      
     
    ],
  },
  sourcify: {
    enabled: false,
  },
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
