const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const width = 500;

const svg = d3.create('svg')
    .attr('viewBox', `0 0 ${width} 33`)
    .attr('width', width)
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .style('display', 'block');

svg.selectAll('text')
  .data(alphabet)
  .join('text')
    .attr('x', (d, i) => i * 17)
    .attr('y', 17)
    .text(d => d);

document.body.appendChild(svg.node());

export {};
