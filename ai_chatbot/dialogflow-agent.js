const dialogflow = require('dialogflow');
const agent = new dialogflow.Agent('YOUR_AGENT_ID');

agent.intents = [
  {
    name: 'hello',
    responses: ['Hello! How can I assist you today?']
  },
  {
    name: 'goodbye',
    responses: ['Goodbye! It was nice chatting with you.']
  }
];

agent.entities = [
  {
    name: 'name',
    value: 'John Doe'
  }
];

module.exports = agent;
