const fruits = [
  {name: "🍊", count: 21},
  {name: "🍇", count: 13},
  {name: "🍏", count: 8},
  {name: "🍌", count: 5},
  {name: "🍐", count: 3},
  {name: "🍋", count: 2},
  {name: "🍎", count: 1},
  {name: "🍉", count: 1}
];

const width = 640;
const height = 202;
const margin = {top: 20, right: 0, bottom: 0, left: 30};

const x = d3.scaleLinear()
    .domain([0, d3.max(fruits, d => d.count)])
    .range([margin.left, width - margin.right]);

const y = d3.scaleBand()
    .domain(fruits.map(d => d.name))
    .range([margin.top, height - margin.bottom])
    .padding(0.1)
    .round(true);

document.body.innerHTML = `
  <svg viewBox="0 0 ${width} ${height}" style="max-width: ${width}px; font: 10px sans-serif;">
    <g fill="steelblue">
      ${fruits.map(d => `<rect y="${y(d.name)}" x="${x(0)}" width="${x(d.count) - x(0)}" height="${y.bandwidth()}"></rect>`).join('')}
    </g>
    <g fill="white" text-anchor="end" transform="translate(-6,${y.bandwidth() / 2})">
      ${fruits.map(d => `<text y="${y(d.name)}" x="${x(d.count)}" dy="0.35em">${d.count}</text>`).join('')}
    </g>
    <g id="axis-top" transform="translate(0,${margin.top})"></g>
    <g id="axis-left" transform="translate(${margin.left},0)"></g>
  </svg>
`;

d3.select('#axis-top')
  .call(d3.axisTop(x))
  .call(g => g.select(".domain").remove());
d3.select('#axis-left')
  .call(d3.axisLeft(y))
  .call(g => g.select(".domain").remove());

export {};