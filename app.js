const express = require('express');
const app = express();

// Almacenamiento en memoria (los datos se pierden al reiniciar el servidor)
const patients = [
  {
    id: 1,
    name: 'Diego Vidal',
    email: 'diego.vidal@example.com',
    insulinShots: [
      { id: 1, units: 10, type: 'Rápida', datetime: '2026-11-20T08:00:00.000Z' },
      { id: 2, units: 8, type: 'Rápida', datetime: '2026-11-20T20:00:00.000Z' },
    ],
    medications: [
      { id: 1, name: 'Metformina', dose: '500mg' },
    ]
  },
  {
    id: 2,
    name: 'Camilo Ibarra',
    email: 'camilo.ibarra@example.com',
    insulinShots: [
      { id: 1, units: 12, type: 'Lenta', datetime: '2026-11-21T07:30:00.000Z' },
    ],
    medications: [
      { id: 1, name: 'Metformina', dose: '850mg' },
      { id: 2, name: 'Glibenclamida', dose: '5mg' },
    ]
  },
];

//Test
app.get('/', (req, res) => {
  res.json({ message: 'Hello from GlucoCare API!' });
});

// Listar todos los pacientes
app.get('/patients', (req, res) => {
  res.json(patients);
});

// Obtener un paciente por id
app.get('/patients/:id', (req, res) => {
  const patient = patients.find((p) => p.id === Number(req.params.id));
  if (!patient) {
    return res.status(404).json({ error: 'Paciente no encontrado' });
  }
  res.json(patient);
});

// Ver las dosis de insulina de un paciente
app.get('/patients/:id/insulin-shots', (req, res) => {
  const patient = patients.find((p) => p.id === Number(req.params.id));
  if (!patient) {
    return res.status(404).json({ error: 'Paciente no encontrado' });
  }
  res.json(patient.insulinShots);
});

// Ver los medicamentos de un paciente
app.get('/patients/:id/medications', (req, res) => {
  const patient = patients.find((p) => p.id === Number(req.params.id));
  if (!patient) {
    return res.status(404).json({ error: 'Paciente no encontrado' });
  }
  res.json(patient.medications);
});

module.exports = app;
