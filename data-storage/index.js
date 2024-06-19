// globalmind-io/data-storage/index.js
const ipfs = require('ipfs-http-client');
const ipfsClient = ipfs('https://ipfs.infura.io:5001');

// Add file to IPFS
const fileBuffer = Buffer.from('Hello, GlobalMind!');
ipfsClient.add(fileBuffer)
  .then(response => {
    const fileId = response.path;
    console.log(`File added to IPFS: ${fileId}`);
  })
  .catch(err => {
    console.error(err);
  });

// Get file from IPFS
ipfsClient.get('Qm...FileId')
  .then(response => {
    const fileBuffer = response.content;
    console.log(`File retrieved from IPFS: ${fileBuffer.toString()}`);
  })
  .catch(err => {
    console.error(err);
  });
