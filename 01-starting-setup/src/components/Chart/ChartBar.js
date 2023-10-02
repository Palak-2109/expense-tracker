import "./ChartBar.css";
function ChartBar(props) {
  let fillHeight = '0%'
  if(props.maxValue>0)
    fillHeight = Math.round((props.height / props.maxValue)*100) + '%'
  return (
    <div className="chart-bar"> 
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{height:fillHeight}}></div>
      </div>
      <label className="chart-bar-label">{props.label}</label>
    </div>
  );
}
export default ChartBar;
