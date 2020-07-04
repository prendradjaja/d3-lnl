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

export {};