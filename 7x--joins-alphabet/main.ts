const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

const width = 500;

function main() {
  makeChart1();

  const updateChart2 = makeChart2();
  provideRandomLettersTo(updateChart2);

  const updateChart3 = makeChart3();
  provideRandomLettersTo(updateChart3);

  const updateChart4 = makeChart4();
  provideRandomLettersTo(updateChart4);
}

function makeChart1() {
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
      .attr('dy', '0.35em')
      .text(d => d);
  
  document.body.appendChild(svg.node());
}

function makeChart2() {
  const svg = d3.create('svg')
      .attr('viewBox', `0 0 ${width} 33`)
      .attr('width', width)
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .style('display', 'block');

  let text = svg.selectAll('text');

  document.body.appendChild(svg.node());
  return (letters: string[]) => {
    text = text
      .data(letters)
      .join('text')
        .attr('x', (d, i) => i * 17)
        .attr('y', 17)
        .attr('dy', '0.35em')
        .text((d) => d);
  }
}

function makeChart3() {
  const svg = d3.create('svg')
      .attr('viewBox', `0 0 ${width} 33`)
      .attr('width', width)
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .style('display', 'block');

  let text = svg.selectAll('text');

  document.body.appendChild(svg.node())
  
  return (letters: string[]) => {
    text = text
      .data(letters, (d: string) => d)
      .join(
        enter => enter.append('text')
          .attr('y', 17)
          .attr('dy', '0.35em')
          .text(d => d),
        update => update,
        exit => exit.remove()
      )
        .attr('x', (d, i) => i * 17);
  };
}

function makeChart4() {
  const svg = d3.create('svg')
      .attr('viewBox', `0 0 ${width} 33`)
      .attr('width', width)
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .style('display', 'block');

  let text = svg.selectAll('text');

  document.body.appendChild(svg.node())

  return (letters: string[]) => {
    const t = svg.transition().duration(750);

    text = text
      .data(letters, (d: string) => d)
      .join(
        enter => enter.append('text')
          .attr('y', -7)
          .attr('dy', '0.35em')
          .attr('x', (d, i) => i * 17)
          .text(d => d),
        update => update,
        exit => exit
          .call(text => text.transition(t).remove()
            .attr('y', 41))
      )
        .call(text => text.transition(t)
          .attr('y', 17)
          .attr('x', (d, i) => i * 17));
  };
}

async function provideRandomLettersTo(callback) {
  while (true) {
    const value = d3.shuffle(alphabet.slice())
      .slice(Math.floor(Math.random() * 10) + 5)
      .sort(d3.ascending);
    callback(value);
    await sleep(2000)
  }
}

function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}

main();

export {};
