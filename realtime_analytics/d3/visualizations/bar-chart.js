// bar-chart.js
import { select, scaleLinear, scaleBand, axisLeft, axisBottom } from 'd3-array';
import { line } from 'd3-shape';
import config from './config';

// Create SVG element
const svg = select('body')
  .append('svg')
  .attr('width', config.width)
  .attr('height', config.height)
  .append('g')
  .attr('transform', `translate(${config.margin.left}, ${config.margin.top})`);

// Create scales
const xScale = scaleBand()
  .domain(['user1', 'user2', 'user3', 'user4', 'user5'])
  .range([0, config.width - config.margin.left - config.margin.right])
  .padding(0.2);

const yScale = scaleLinear()
  .domain([0, 100])
  .range([config.height - config.margin.top - config.margin.bottom, 0]);

// Create axes
const xAxis = axisBottom(xScale);
const yAxis = axisLeft(yScale);

// Add axes to SVG
svg.append('g')
  .attr('class', 'x-axis')
  .call(xAxis);

svg.append('g')
  .attr('class', 'y-axis')
  .call(yAxis);

// Subscribe to Kafka topic
const kafka = require('kafka-node');
const consumer = new kafka.ConsumerGroup({
  groupId: config.kafka.groupId,
  topics: [config.kafka.topic]
});

consumer.on('message', (message) => {
  const data = JSON.parse(message.value);
  const bars = svg.selectAll('rect')
    .data(data);

  bars.enter()
    .append('rect')
    .attr('x', (d, i) => xScale(d.user_id))
    .attr('y', (d) => yScale(d.interactions))
    .attr('width', xScale.bandwidth())
    .attr('height', (d) => config.height - yScale(d.interactions) - config.margin.top - config.margin.bottom);

  bars.transition()
    .duration(500)
    .attr('height', (d) => config.height - yScale(d.interactions) - config.margin.top - config.margin.bottom);
});
