import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

export default class ChartTable extends React.Component {
  renderTable() {
    const cards = [
      "A",
      "K",
      "Q",
      "J",
      "T",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];
    const rows = [
      <tr key={"header"} className="row">
        <th className="square"></th>
        {cards.map(
          (card, index) => (
            <TableHead key={index} head={card} />
          ) // Modify Later (Try in TableRow)
        )}
      </tr>,
    ];
    for (let i = 0; i < cards.length; i++) {
      rows.push(<TableRow key={cards[i]} head={cards[i]} data={cards} />);
    }
    return rows;
  }
  render() {
    return (
      <table>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}
