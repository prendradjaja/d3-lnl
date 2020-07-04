const points = [
  { x: 1, y: 10 },
  { x: 5, y: 80 },
];

const width = 300;
const height = 300;

const margin = {
  left: 50,
  right: 30,
  top: 30,
  bottom: 50,
};

const svg =
  d3.select('body')
    .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('border', '1px solid gray');

// const xScale =
//   d3.scaleLinear()
//     .domain([0, 10])
//     .range([margin.left, width - margin.right]);

// const yScale =
//   d3.scaleLinear()
//     .domain([0, 100])
//     .range([height - margin.bottom, margin.top]);

// for (let point of points) {
//   svg.append('circle')
//     .attr('r', 2)
//     .attr('cx', xScale(point.x))
//     .attr('cy', yScale(point.y));
// }

// svg.append('g')
//   .call(d3.axisBottom(xScale))
//   .attr('transform', `translate(0, ${height - margin.bottom})`);

// svg.append('g')
//   .call(d3.axisLeft(yScale))
//   .attr('transform', `translate(${margin.left}, 0)`);
  
export {};