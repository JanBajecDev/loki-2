import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

// import "@openzeppelin/hardhat-upgrades";

dotenv.config();

export default {
  solidity: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999,
      },
      evmVersion: 'istanbul'
    },
    compilers: [
      {
        version: "0.5.16"
      },
      {
        version: "0.6.6"
      },
      {
        version: "0.4.18"
      }
    ]
  },
  allowUnlimitedContractSize: true,
  networks: {
    // hardhat: {
    //   forking: {
    //     url: process.env.MAINNET_URL
    //   }
    // },
    mainnet: {
      url: process.env.MAINNET_URL,
      accounts: [process.env.PK_MAIN],
      gas: 5000000,
      gasPrice: 9000000000,
    },
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PK_TEST],
      gas: 3000000,
    },
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PK_TEST],
      gas: 3000000,
    },
    matic: {
      url: process.env.MATIC_URL,
      accounts: [process.env.PK_MAIN],
      gasPrice: 100000000000,
      gas: 6000000,
    },
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.PK_TEST],
      gas: 3000000,
    },
    avax: {
      url: process.env.AVAX_URL,
      accounts: [process.env.PK_MAIN],
      gasPrice: 100000000000,
      gas: 6000000,
    },
    fuji: {
      url: process.env.FUJI_URL,
      accounts: [process.env.PK_TEST],
      gasPrice: 100000000000,
      gas: 6000000,
    },
    rwa: {
      url: 'https://rpc.rwa.io',
      accounts: [process.env.PK_TEST],
    },
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
    currency: "ETH",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  defender: {
    apiKey: process.env.DEFENDER_API_KEY,
    apiSecret: process.env.DEFENDER_API_SECRET,
  },
  etherscan: {
    apiKey: {
      // ethereum
      mainnet: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      // polygon
      polygon: process.env.POLYGONSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      //avalanche
      avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY,
      avalanche: process.env.SNOWTRACE_API_KEY
    },
  },
} as HardhatUserConfig;
