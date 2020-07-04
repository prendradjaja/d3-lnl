const message: string = "Hello, D3!";
d3.select('p')
    .text(message);

d3.selectAll('#shopping-list li')
    .style('color', 'green')
    .style('font-family', 'sans-serif')
  .append('input')
    .style('opacity', 0.5)
    .attr('type', 'checkbox');

d3.selectAll('#numbers li')
    .text(() => Math.random());

export {};