import React from "react";
import ChartTable from "./ChartTable";

export default class SituationChart extends React.Component {
  state = {
    title: "Interactive title",
  };

  handleTest = () => {
    console.log("This works!");
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleTest}>{this.state.title}</h1>
        <ChartTable />
      </div>
    );
  }
}
