import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
    const expensesAmountArray = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxValue = Math.max(...expensesAmountArray)
    console.log(expensesAmountArray)
    console.log(maxValue)
    return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          label={dataPoint.label}
          height={dataPoint.value}
          key={dataPoint.label}
          maxValue={maxValue}
        ></ChartBar>
      ))}
    </div>
  );
}
export default Chart;
