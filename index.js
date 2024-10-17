const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.json());

app.get('/employees', async (req, res) => {
  const employees = await allGetEmployees();
  res.json({ employees });
});

app.get('/employees/details/:id', async (req, res) => {
  let employee = await getEmployeeById(parseInt(req.params.id));
  res.json({ employee });
});

module.exports = { app };
