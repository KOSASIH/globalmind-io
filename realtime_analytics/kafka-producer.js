const Kafka = require('kafka-node');
const producer = new Kafka.Producer({
  clientId: 'globalmind-io',
  brokers: ['localhost:9092']
});

producer.on('ready', () => {
  console.log('Kafka producer ready');
});

producer.on('error', (err) => {
  console.error('Kafka producer error:', err);
});

const produceMessage = (message) => {
  producer.send([
    {
      topic: 'events',
      messages: [message]
    }
  ]);
};

module.exports = produceMessage;
