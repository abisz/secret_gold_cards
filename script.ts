import * as d3 from 'd3';
// @ts-ignore
import dataUrl from 'url:./data/data.csv';

d3.csv(dataUrl).then((data) => {
    const { columns } = data;
    const table = d3.select('#table').append('table');
    const thead = table.append('thead');
    const tbody = table.append('tbody');
    return;
    thead.append('tr')
        .selectAll('th')
        .data(data.columns)
        .enter().append('th')
        .text(d => d);

    const rows = tbody.selectAll('tr')
        .data(data)
        .enter().append('tr');

    rows.selectAll('td')
        .data(row => {
            return columns.map(c => ({ column: c, value: row[c]}))
        }).enter().append('td')
        .text(d => d.value)
});
