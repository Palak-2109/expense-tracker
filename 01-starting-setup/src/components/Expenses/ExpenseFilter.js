import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  function dropdownChangeHandler(event){ 
    props.onFilterYearChange(event.target.value)
  }
  return (
    <div className="expense-filter">
      <label className="filter_label">Filter by Year</label>
      <select value={props.selected} onChange={dropdownChangeHandler} className="expense-filter-dropdown">
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
