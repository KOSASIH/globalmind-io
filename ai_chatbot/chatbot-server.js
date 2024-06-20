const express = require('express');
const app = express();
const dialogflowAgent = require('./dialogflow-agent');

app.post('/chat', (req, res) => {
  const { message } = req.body;
  dialogflowAgent.detectIntent(message, (response) => {
    res.json(response);
  });
});

app.listen(3000, () => {
  console.log('Chatbot server listening on port 3000');
});
