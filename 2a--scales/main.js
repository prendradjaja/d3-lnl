const data = [
    { state: 'AR', dogOwnershipPercent: 48 },
    { state: 'NM', dogOwnershipPercent: 46 },
    { state: 'KY', dogOwnershipPercent: 46 },
    { state: 'MO', dogOwnershipPercent: 46 },
    { state: 'WV', dogOwnershipPercent: 46 },
    { state: 'MS', dogOwnershipPercent: 45 },
    { state: 'AL', dogOwnershipPercent: 44 },
    { state: 'TN', dogOwnershipPercent: 44 },
    { state: 'TX', dogOwnershipPercent: 44 },
    { state: 'OK', dogOwnershipPercent: 43 },
    { state: 'SD', dogOwnershipPercent: 43 },
    { state: 'ID', dogOwnershipPercent: 43 },
    { state: 'CO', dogOwnershipPercent: 43 },
    { state: 'KS', dogOwnershipPercent: 42 },
    { state: 'MT', dogOwnershipPercent: 41 },
    { state: 'NC', dogOwnershipPercent: 40 },
    { state: 'AZ', dogOwnershipPercent: 40 },
    { state: 'GA', dogOwnershipPercent: 40 },
    { state: 'IN', dogOwnershipPercent: 40 },
    { state: 'OR', dogOwnershipPercent: 39 },
    { state: 'WY', dogOwnershipPercent: 39 },
    { state: 'SC', dogOwnershipPercent: 39 },
    { state: 'VT', dogOwnershipPercent: 38 },
    { state: 'NV', dogOwnershipPercent: 37 },
    { state: 'OH', dogOwnershipPercent: 37 },
    { state: 'LA', dogOwnershipPercent: 36 },
    { state: 'WA', dogOwnershipPercent: 36 },
    { state: 'ND', dogOwnershipPercent: 36 },
    { state: 'FL', dogOwnershipPercent: 36 },
    { state: 'VA', dogOwnershipPercent: 35 },
    { state: 'ME', dogOwnershipPercent: 35 },
    { state: 'MI', dogOwnershipPercent: 35 },
    { state: 'WI', dogOwnershipPercent: 34 },
    { state: 'NE', dogOwnershipPercent: 34 },
    { state: 'DE', dogOwnershipPercent: 34 },
    { state: 'IA', dogOwnershipPercent: 33 },
    { state: 'PA', dogOwnershipPercent: 33 },
    { state: 'CA', dogOwnershipPercent: 33 },
    { state: 'IL', dogOwnershipPercent: 32 },
    { state: 'NJ', dogOwnershipPercent: 32 },
    { state: 'MN', dogOwnershipPercent: 32 },
    { state: 'MD', dogOwnershipPercent: 31 },
    { state: 'NH', dogOwnershipPercent: 30 },
    { state: 'UT', dogOwnershipPercent: 29 },
    { state: 'RI', dogOwnershipPercent: 29 },
    { state: 'NY', dogOwnershipPercent: 29 },
    { state: 'CT', dogOwnershipPercent: 28 },
    { state: 'MA', dogOwnershipPercent: 24 },
];
// const colorScale =
//   percent => `rgba(0, 0, 255, ${percent/100})`
// const colorScale =
//   d3.scaleSequential(d3.interpolateBlues)
//     .domain([0, 50])
const colorScale = d3.scaleSequential(d3.interpolateBlues)
    .domain([0, d3.max(data, d => d.dogOwnershipPercent)]);
for (let datum of data) {
    d3.select('#' + datum.state)
        .attr('fill', colorScale(datum.dogOwnershipPercent));
}
//# sourceMappingURL=main.js.map