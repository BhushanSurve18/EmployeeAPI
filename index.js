const express = require('express');
const { resolve } = require('path');
const{getAllEmployees,getEmployeeById} =  require("./controllers")
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

//all employee api

app.get('/employees', async (req, res) => {
  const employees =   getAllEmployees();
  res.json({ employees });
});

app.get('/employees/details/:id', async (req, res) => {
  let employee =  getEmployeeById(parseInt(req.params.id));
  res.json({ employee });
});

module.exports = { app };
