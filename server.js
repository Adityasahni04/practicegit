const express = require('express');
const db = require('./database.js');
const bodyParser = require('body-parser');
const PersonRoutes = require('./routes/PersonRoutes.js')
require('dotenv').config();
const PORT = process.env.PORT||3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello mere bhai sun raha hu mai");
});

app.use('/person', PersonRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
