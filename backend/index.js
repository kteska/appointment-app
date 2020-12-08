require('dotenv').config();

const config = require('./config/config');

const express = require('express');
const app = express();

app.use(express.json());

const router = require('./routes/user');
router(app);

app.listen(config.port, () => console.log(`Appointment app is listening on port ${config.port}`))