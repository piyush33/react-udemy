import Alert from "./components/alert";
import Expenses from "./components/expense/expenses";
import NewExpense from "./components/new-expense/newExpense";
import { useState } from "react";

const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setexpenses] = useState(initialExpenses);

  const addExpensehandler = (expense) => {
    console.log(expense);
    setexpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler} />
      <Expenses items={expenses} />
      <Alert />
    </div>
  );
}

export default App;
