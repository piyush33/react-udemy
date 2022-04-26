import "./expenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  //   const [userInput, setuserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleClickHandler = (event) => {
    setenteredTitle(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const amountClickHandler = (event) => {
    setenteredAmount(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredaAmount: event.target.value,
    // });
  };

  const dateClickHandler = (event) => {
    setenteredDate(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title </label>
          <input type="text" value={enteredTitle} onChange={titleClickHandler} />
        </div>
        <div className="new-expense_control">
          <label>Amount </label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountClickHandler} />
        </div>
        <div className="new-expense_control">
          <label>Date </label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateClickHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit ">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
