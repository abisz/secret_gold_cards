import { select } from 'd3-selection';
import { csv } from 'd3-fetch';
// @ts-ignore
import dataUrl from 'url:./data/data.csv';


csv(dataUrl).then((data) => {
    const { columns } = data;
    const table = select('#table').append('table');
    const thead = table.append('thead');
    const tbody = table.append('tbody');

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
