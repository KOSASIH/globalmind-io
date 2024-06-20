const IBMQuantum = require('ibm-quantum-api');

const api = new IBMQuantum({
  apiToken: 'YOUR_API_TOKEN',
  backend: 'ibmq_qasm_simulator'
});

const circuit = {
  "qubits": 2,
  "clbits": 2,
  "operations": [
    {"name": "h", "qubits": [0]},
    {"name": "cx", "qubits": [0, 1]},
    {"name": "measure", "qubits": [0, 1], "clbits": [0, 1]}
  ]
};

api.runCircuit(circuit)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
