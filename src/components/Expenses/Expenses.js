// isme sare expenses honge ...wo wala component hai ye
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "../Chart/ExpenseChart";

function Expenses(props) {
  const expenses = props.items;
  const [filterYear, setFilterYear] = useState(2023);
  function filterYearChangeHandler(enteredYear) {
    setFilterYear(enteredYear);
  }
  const filteredExpenses = expenses.filter((expense)=>{
    return expense.date.getFullYear() === filterYear;
  })
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYear}
        onFilterYearChange={filterYearChangeHandler}
      ></ExpenseFilter>
      <ExpenseChart items={filteredExpenses}></ExpenseChart>
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </Card>
  );
}

export default Expenses;
