// 2_deploy_contract.js
const GlobalMindContract = artifacts.require("GlobalMindContract");

module.exports = async function(deployer) {
  await deployer.deploy(GlobalMindContract, "0x742d35Cc6634C0532925a3b844Bc454e4438f44e");
};
