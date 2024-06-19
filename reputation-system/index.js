// globalmind-io/reputation-system/index.js
import Web3 from 'web3';
import { ReputationSystem } from '../contracts/ReputationSystem.sol';

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));
const reputationSystem = new web3.eth.Contract(ReputationSystem.abi, '0x...ReputationSystemContractAddress');

// Initialize user reputation
reputationSystem.methods.addUser('0x...UserAddress').send({ from: '0x...AdminAddress' });

// Update user reputation
reputationSystem.methods.updateReputation('0x...UserAddress', 10).send({ from: '0x...AdminAddress' });

// Get user reputation
reputationSystem.methods.getReputation('0x...UserAddress').call().then(reputation => {
  console.log(`User reputation: ${reputation}`);
});
