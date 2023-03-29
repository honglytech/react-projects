import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    addExpense({ name, amount, date });
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Expense Name" />
        <input type="number" name="amount" placeholder="Amount" />
        <input type="date" name="date" placeholder="Date" />
        <button type="submit">Add Expense</button>
      </form>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          name={expense.name}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
