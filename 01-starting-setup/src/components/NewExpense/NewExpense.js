import "./NewExpense.css";
import { useState } from "react";
function NewExpense(props) {

  //   const [enteredInput, setEnteredInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  //   });

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

//   function changeTitleHandler(event) {
//     setEnteredTitle(event.target.value);
//     // setEnteredInput({
//     //     ...enteredInput,
//     //     enteredTitle: event.target.value
//     // });
//     // setEnteredInput((prevState) => {
//     //     return {...prevState , enteredTitle: event.target.value};
//     // })
//   }
//   function changeAmountHandler(event) {
//     setEnteredAmount(event.target.value);
//     // setEnteredInput({
//     //     ...enteredInput,
//     //     enteredAmount: event.target.value
//     // });
//   }
//   function changeDateHandler(event) {
//     setEnteredDate(event.target.value);
//     // setEnteredInput({
//     //     ...enteredInput,
//     //     enteredDate: event.target.value
//     // });
//   }
  //combined function of all the three diff handlers
  function changeInputHandler(key, value) {
    if (key === "title") setEnteredTitle(value);
    else if (key === "date") setEnteredDate(value);
    else setEnteredAmount(value);
  }

  function submitHandler(event){
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    props.onAddExpense(expenseData)
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
    //now that we have prevented the default behaviour, it will not reload on form submission, so we have to manually 
    // reset the form values
    // console.log(expenseData)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-input">
        <div className="form-input-title">
          <label>Title</label>
          {/* <input type="text" onChange={changeTitleHandler}></input> */}
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              changeInputHandler("title", event.target.value)
            }
          ></input>
        </div>
        <div className="form-input-amount">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            step="0.01"
            min="0"
            onChange={(event) =>
              changeInputHandler("amount", event.target.value)
            }
          ></input>
        </div>
        <div className="form-input-date">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min='2020-01-01'
            max='2023-12-31'
            onChange={(event) => changeInputHandler("date", event.target.value)}
          ></input>
        </div>
      </div>
      <div className="form-submit-button">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default NewExpense;
