import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const dummyData = [
    {
      id: 1,
      title: "car insurance",
      amount: 342.55,
      date: new Date(2021, 2, 28),
    },
    {
      id:2,
      title: "toilet paper",
      amount: 245.7,
      date: new Date(2021, 8, 5),
    },
    {
      id:3,
      title: "toilet paper",
      amount: 245.7,
      date: new Date(2021, 8, 5),
    },
    {
      id:4,
      title: "toilet paper",
      amount: 245.7,
      date: new Date(2021, 8, 5),
    },
  ];
  const [expenseArray, setExpenseArray] = useState(dummyData);

  function addExpenseHandler(enteredExpense) {
    console.log('helooo')
    const newExpense = {
      ...enteredExpense,
      id: Math.random(),
    };
    setExpenseArray((prevState) => {
      return [newExpense,...prevState];
    });
    console.log(newExpense);
  }

  return (
    <div>
      <h2 style={{color:'white'}}>My Expense Tracker!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenseArray}></Expenses>
    </div>
  );
}

export default App;
