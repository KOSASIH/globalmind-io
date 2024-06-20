# quantum-circuit.py
from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister

# Create a quantum circuit with 5 qubits and 3 classical bits
qr = QuantumRegister(QUANTUM_CIRCUIT_QUBITS, 'q')
cr = ClassicalRegister(QUANTUM_CIRCUIT_QUBITS, 'c')
qc = QuantumCircuit(qr, cr)

# Add quantum gates to the circuit
qc.h(qr[0])
qc.cx(qr[0], qr[1])
qc.cx(qr[1], qr[2])
qc.measure(qr, cr)

# Compile the circuit for the IBM Quantum backend
qc.compile('ibmq_qasm_simulator', format='qasm')
