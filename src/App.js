import React, { useState } from "react";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Health Insurance",
    date: new Date(2021, 2, 28),
    amount: 50,
  },

  {
    title: "Car Insurance",
    date: new Date(2021, 2, 28),
    amount: 90,
  },

  {
    title: "House Insurance",
    date: new Date(2021, 2, 28),
    amount: 80,
  },

  {
    title: "Dental Insurance",
    date: new Date(2021, 2, 28),
    amount: 28,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <h1
        style={{ textAlign: "center", color: "#000", fontWeight: "normal" }}
      >
        Expense App
      </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
