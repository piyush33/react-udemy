import ExpenseItem from "./expenseItem";
import ExpensesFilter from "./expensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </div>
  );
}

export default Expenses;
