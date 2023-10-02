import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.items.length == 0) return <h2 className="expense-list-fallback">No expenses found.</h2>;
  return props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={new Date(expense.date)}
    ></ExpenseItem>
  ));
}

export default ExpenseList;
