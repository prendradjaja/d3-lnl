const message: string = "Hello, D3 and TypeScript!"

d3.select('body')
  .append('p')
  .text(message);

export {};