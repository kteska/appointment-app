require('dotenv').config();
const cors = require('cors')

const config = require('./config/config');

const express = require('express');
const app = express();
app.use(cors())
app.use(express.json());

require('./routes/index')(app)

app.listen(config.port, () => console.log(`QA app is listening on port ${config.port}`))