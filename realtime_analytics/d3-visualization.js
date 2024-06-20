import * as d3 from 'd3-array';

const data = [
  { x: 1, y: 10 },
  { x: 2, y: 20 },
  { x: 3, y: 30 }
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const width = 500 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const xScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, width]);

const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);

const line = d3.line()
  .x((d) => xScale(d.x))
  .y((d) => yScale(d.y));

const svg = d3.select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

svg.append('path')
  .datum(data)
  .attr('d', line);

svg.append('g')
  .attr('class', 'axis')
  .call(d3.axisBottom(xScale));

svg.append('g')
  .attr('class', 'axis')
  .call(d3.axisLeft(yScale));
