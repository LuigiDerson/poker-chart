import React from 'react';
import TableHead from './TableHead';
import TableData from './TableData';

const TableRow = (props) => {
    const head = props.head;
    const data = props.data;
    return (
        <tr className="row">
            {<TableHead head={head} />}
            {data.map(card => <TableData key={head + card}  data={head + card} />)}
        </tr>
    );  
};

export default TableRow;