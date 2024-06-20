// line-chart.js
import { select, scaleLinear, scaleTime, axisLeft, axisBottom } from 'd3-array';
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
const xScale = scaleTime()
  .domain([new Date('2023-01-01'), new Date('2023-01-31')])
  .range([0, config.width - config.margin.left - config.margin.right]);

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
  const line = svg.selectAll('path')
    .data([data]);

  line.enter()
    .append('path')
    .attr('d', (d) => line()(d));

  line.transition()
    .duration(500)
    .attr('d', (d) => line()(d));
});

// Define line function
function line() {
  return d3.line()
    .x((d) => xScale(new Date(d.timestamp)))
    .y((d) => yScale(d.interactions));
}
