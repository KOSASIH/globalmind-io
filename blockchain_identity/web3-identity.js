const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_PROJECT_ID'));

const contractAddress = '0x...';
const contractABI = [...];

const contract = new web3.eth.Contract(contractABI, contractAddress);

const setIdentity = async (identity) => {
  const txCount = await web3.eth.getTransactionCount();
  const tx = {
    from: '0x...',
    to: contractAddress,
    value: '0',
    gas: '20000',
    gasPrice: '20',
    data: contract.methods.setIdentity(identity).encodeABI()
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, '0x...');
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

  console.log(`Identity set: ${identity}`);
};

const getIdentity = async (address) => {
  const identity = await contract.methods.getIdentity(address).call();
  console.log(`Identity for ${address}: ${identity}`);
};
