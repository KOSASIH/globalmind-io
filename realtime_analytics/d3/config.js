// config.js
export default {
  // D3 configuration
  width: 800,
  height: 600,
  margin: { top: 20, right: 20, bottom: 30, left: 40 },

  // Kafka configuration
  kafka: {
    bootstrapServers: 'localhost:9092',
    groupId: 'd3-consumer-group',
    topic: 'globalmind_analytics'
}
};
