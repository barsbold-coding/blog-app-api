// Core libraries
const express = require('express');
const dotenv = require('dotenv');

// Config
dotenv.config({ path: './config/config.env' });

// Creating Express App
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.PORT} port...`);
});