import React, { useState } from "react";
import ExpensesContainer from "./components/ExpensesContainer.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

const expenses = [
  // {
  //   id: "e1",
  //   title: "Papel Higiênico",
  //   type: "Essenciais",
  //   amount: 94.12,
  //   date: new Date(2018, 10, 10),
  // },
  // {
  //   id: "e2",
  //   title: "New Tv",
  //   type: "Lazer",
  //   amount: 799.49,
  //   date: new Date(2018, 6, 10),
  // },
  // {
  //   id: "e3",
  //   title: "IPVA do Carro",
  //   type: "Contas & Impostos",
  //   amount: 294.67,
  //   date: new Date(2018, 2, 10),
  // },
  // {
  //   id: "e4",
  //   title: "Nova mesa de madeira",
  //   type: "Necessidades Domésticas",
  //   amount: 450,
  //   date: new Date(2018, 5, 10),
  // },
];

const App = () => {
  const [expensesList, setExpensesList] = useState(expenses);

  const newExpenseHandler = (newExpense) => {
    setExpensesList((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense expenses={expenses} onGetNewExpense={newExpenseHandler} />
      <ExpensesContainer expenses={expensesList} />
    </div>
  );
};

export default App;
