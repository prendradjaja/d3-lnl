const margin = ({top: 30, right: 30, bottom: 30, left: 30})
const height = 500
const width = 800

const csv = 
`letter,frequency,letterType
A,0.08167,vowel
B,0.01492,consonant
C,0.02782,consonant
D,0.04253,consonant
E,0.12702,vowel
F,0.02288,consonant
G,0.02015,consonant
H,0.06094,consonant
I,0.06966,vowel
J,0.00153,consonant
K,0.00772,consonant
L,0.04025,consonant
M,0.02406,consonant
N,0.06749,consonant
O,0.07507,vowel
P,0.01929,consonant
Q,0.00095,consonant
R,0.05987,consonant
S,0.06327,consonant
T,0.09056,consonant
U,0.02758,vowel
V,0.00978,consonant
W,0.0236,consonant
X,0.0015,consonant
Y,0.01974,consonant
Z,0.00074,consonant`;

interface LetterDatum {
  letter: string;
  letterType: 'vowel' | 'consonant';
  frequency: number;
}
type LetterData = LetterDatum[];

const data = 
  d3.csvParse(csv, ({letter, frequency, letterType}) => ({letter, letterType, frequency: +frequency} as LetterDatum))
    .sort((a, b) => d3.descending(a.frequency, b.frequency));

const xScale = d3.scaleBand<number>()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.frequency)]).nice()
    .range([height - margin.bottom, margin.top])

const colorScale = letterType => letterType === 'consonant' ? 'steelblue' : 'darkkhaki'
// const colorScale = d3.scaleOrdinal<string>()
//     .domain(['consonant', 'vowel'])
//     .range(['steelblue', 'darkkhaki']);

const svg = d3.create("svg")
    .attr('width', width)
    .attr('height', height);

showData(data);

const xAxis = g => g
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(d3.axisBottom(xScale))

const yAxis = g => g
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale).tickFormat(d3.format('.0%')))


svg.append("g")
  .call(xAxis);

svg.append("g")
  .call(yAxis);

document.body.appendChild(svg.node())

function showData(data: LetterData) {
  svg.selectAll("rect")
      .data(data, (d: LetterDatum) => d.letter) // Need to type the key function! :(
      .join(
        enter =>
          enter.append("rect")
              .attr("fill", 'white')
              .attr("x", (d, i) => xScale(i))
              .attr("y", d => yScale(d.frequency))
              .attr("height", d => yScale(0) - yScale(d.frequency))
              .attr("width", xScale.bandwidth())
          ,
        update =>
          update
      )
              .transition()
              .duration(500)
              .attr("fill", d => colorScale(d.letterType))
              .attr("x", (d, i) => xScale(i))
              .attr("y", d => yScale(d.frequency))
              .attr("height", d => yScale(0) - yScale(d.frequency))
}

function showConsonants() {
  showData(data.filter(d => d.letterType === 'consonant'))
}

function showVowels() {
  showData(data.filter(d => d.letterType === 'vowel'))
}

function showAll() {
  showData(data)
}

export {};
