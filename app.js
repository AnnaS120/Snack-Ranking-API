const express = require('express');
const cors = require('cors');
const logger = require('./logger');

const snackRouter = require('./routers/snacks');

const app = express();
app.use(cors());
app.use(logger);
app.use(express.json());

app.use('/snacks', snackRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    title: "Snack Rankings",
    description: "Find and rate the best snacks ever!"
  })
})

module.exports = app;
