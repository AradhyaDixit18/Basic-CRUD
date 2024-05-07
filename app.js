// app.js
const express = require('express');
const bodyParser = require('body-parser');
const animalRoutes = require('./routes/animalRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/animals', animalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
