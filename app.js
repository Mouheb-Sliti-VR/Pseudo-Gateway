const express = require('express');
const bodyParser = require('body-parser');
const processFlowRoute = require('./routes/processFlowRoute');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(processFlowRoute);

app.get("/health-check", (req, res) => {
  res.status(200).send("up");
});

// Start the server
app.listen(port, () => {
  console.log(`Disco server running at http://localhost:${port}`);
});
