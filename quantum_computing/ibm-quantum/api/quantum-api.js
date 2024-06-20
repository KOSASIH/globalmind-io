// quantum-api.js
import axios from 'axios';
import config from '../config';

class QuantumAPI {
  async runCircuit(circuit) {
    const response = await axios.post(`${config.apiUrl}/jobs`, {
      circuit: circuit,
      backend: 'ibmq_qasm_simulator'
    }, {
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }

  async getCircuitResult(jobId) {
    const response = await axios.get(`${config.apiUrl}/jobs/${jobId}/result`, {
      headers: {
        'Authorization': `Bearer ${config.apiToken}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  }
}

export default QuantumAPI;
