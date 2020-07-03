const message: string = "From D3";
d3.select('p')
    .append('span')
    .text(message);

d3.selectAll('#shopping-list li')
    .style('color', 'green')
  .append('input')
    .attr('type', 'checkbox');

d3.selectAll('#numbers li')
  .text(() => Math.random());

export {};