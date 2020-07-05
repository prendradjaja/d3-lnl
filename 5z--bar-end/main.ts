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
  value: number; // TODO rename to frequency
}

type LetterData = LetterDatum[];

// TODO add labels for the letters?
// TODO 'as any'
// TODO dedupe stuff?

const data = 
  d3.csvParse(csv, ({letter, frequency, letterType}) => ({letter, letterType, value: +frequency} as LetterDatum))
    .sort((a, b) => d3.descending(a.value, b.value));

const x = d3.scaleBand<number>()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])

const color = d3.scaleOrdinal<string>()
    .domain(['consonant', 'vowel'])
    .range(['steelblue', 'darkkhaki']);
// const color = letterType => letterType === 'consonant' ? 'steelblue' : 'darkkhaki'

const xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))

const yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickFormat(d3.format('.0%')))

const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height] as any)
    .attr('width', width);

const bars = svg.append("g");
bars
  .selectAll("rect")
  .data(data)
  .join("rect")
    .attr("fill", d => color(d.letterType))
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.value))
    .attr("height", d => y(0) - y(d.value))
    .attr("width", x.bandwidth());

svg.append("g")
  .call(xAxis);

svg.append("g")
  .call(yAxis);

document.body.appendChild(svg.node())

function showConsonants() {
  show(data.filter(d => d.letterType === 'consonant'))
}

function showVowels() {
  show(data.filter(d => d.letterType === 'vowel'))
}

function showAll() {
  show(data)
}

function show(subset: LetterData) {
  bars
    .selectAll("rect")
    .data(subset, (d: LetterDatum) => d.letter)
    .join(
      enter => enter
        .append('rect')
        .attr("fill", 'white')
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth()),
      update => update,
      exit => exit.remove()
    )
      .call(rect => rect.transition()
        .duration(500)
        .attr("fill", d => color(d.letterType))
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth())
    )
}

export {};


export {};
