// config.js
module.exports = {
  // Network configuration
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 6721975,
      gasPrice: 20000000000
    },
    testnet: {
      host: "https://testnet.infura.io/v3/YOUR_PROJECT_ID",
      port: 443,
      network_id: "4",
      gas: 6721975,
      gasPrice: 20000000000
    },
    mainnet: {
      host: "https://mainnet.infura.io/v3/YOUR_PROJECT_ID",
      port: 443,
      network_id: "1",
      gas: 6721975,
      gasPrice: 20000000000
    }
  },

  // Compiler configuration
  compilers: {
    solc: {
      version: "0.8.10",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },

  // Migration configuration
  migrations_directory: "./migrations",
  migrations: ["1_initial_migration.js", "2_deploy_contract.js"]
};
