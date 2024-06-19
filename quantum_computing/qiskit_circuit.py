from qiskit import QuantumCircuit, execute

qc = QuantumCircuit(2, 2)

qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])

job = execute(qc, backend='qasm_simulator')
result = job.result()
print(result.get_counts(qc))
