const uport = require('uport-credentials');

const credentials = uport.Credentials({
  did: 'did:ethr:0x...',
  privateKey: '0x...'
});

const setIdentity = async (identity) => {
  const credential = await credentials.createCredential({
    type: 'Identity',
    claim: {
      identity
    }
  });

  console.log(`Identity set: ${identity}`);
};

const getIdentity = async (address) => {
  const credential = await credentials.getCredential({
    type: 'Identity',
    claim: {
      address
    }
  });

  console.log(`Identity for ${address}: ${credential.claim.identity}`);
};
