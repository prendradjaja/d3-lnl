d3.select('div')
  .style('background-color', 'green')

function purple() {
  d3.select('div')
    .transition()
    .duration(1000)
    .style('background-color', 'purple')
}

export {};
