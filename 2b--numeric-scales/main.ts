const points = [
  { x: 1, y: 10 },
  { x: 5, y: 80 },
];

const width = 400;
const height = 400;

const margin = {
  left: 100,
  right: 100,
  top: 100,
  bottom: 100,
};

const svg =
  d3.select('body')
    .append('svg')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', width)
      .style('border', '1px solid gray');

const x =
  d3.scaleLinear()
    .domain([0, 10])
    .range([margin.left, width - margin.right]);

const y =
  d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top]);

svg.append('g')
  .call(d3.axisBottom(x))
  .attr('transform', `translate(0, ${height - margin.bottom})`);

svg.append('g')
  .call(d3.axisLeft(y))
  .attr('transform', `translate(${margin.left}, 0)`);

const marginOverlay =
  svg.append('g')
    .attr('fill', 'orange')
    .attr('opacity', 0.5);

marginOverlay
  .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', margin.top)

marginOverlay
  .append('rect')
    .attr('x', 0)
    .attr('y', margin.top)
    .attr('width', margin.left)
    .attr('height', height - margin.top - margin.bottom)

marginOverlay
  .append('rect')
    .attr('x', width - margin.right)
    .attr('y', margin.top)
    .attr('width', margin.right)
    .attr('height', height - margin.top - margin.bottom)

marginOverlay
  .append('rect')
    .attr('x', 0)
    .attr('y', height - margin.bottom)
    .attr('width', width)
    .attr('height', margin.bottom)


for (let point of points) {
  svg.append('circle')
    .attr('r', 2)
    .attr('cx', x(point.x))
    .attr('cy', y(point.y));
}
  
export {};