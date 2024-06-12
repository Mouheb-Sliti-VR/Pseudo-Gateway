const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const processFlowRoute = require('./routes/processFlowRoute');
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use(processFlowRoute);

app.get("/health-check", (req, res) => {
  res.status(200).send("Server is awake");
});

// Start the server
app.listen(port, () => {
  console.log(`Disco server running at http://localhost:${port}`);
});
