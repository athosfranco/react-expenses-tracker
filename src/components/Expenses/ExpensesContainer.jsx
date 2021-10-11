import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import ExpensesChart from "./ExpensesChart.jsx";
import notFound from "../../img/not-found.svg";
import "../styles/ExpensesContainer.css";

const ExpensesContainer = (props) => {
  let [pickedYear, setPickedYear] = useState("all");

  const pickedYearHandler = (data) => {
    setPickedYear(data);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.year === pickedYear;
  });

  const expenseIdHandler = (data) => {
    props.onExpenseId(data);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={pickedYear}
          onGetPickedYear={pickedYearHandler}
        />
        {pickedYear !== "all" ? (
          <ExpensesChart expenses={filteredExpenses} />
        ) : (
          console.log("filter not selected")
        )}

        {pickedYear === "all" ? (
          props.expenses.length === 0 ? (
            <div className="no-expenses-found__container">
              <img src={notFound} alt="Sem despesa"></img>
              <p className="no-expenses-found__msg">
                Não há nenhuma despesa a ser exibida.
              </p>
            </div>
          ) : (
            props.expenses.map((expense) => (
              <ExpenseItem
                id={expense.id}
                key={expense.id}
                title={expense.title}
                type={expense.type}
                amount={expense.amount}
                date={expense.date}
                onExpenseId={expenseIdHandler}
              />
            ))
          )
        ) : filteredExpenses.length === 0 ? (
          /* Se não houver despesas, exibir mensagem de erro. */
          <div className="no-expenses-found__container">
            <img src={notFound} alt="Sem despesa"></img>
            <p className="no-expenses-found__msg">
              Não há nenhuma despesa registrada em {pickedYear}.
            </p>
          </div>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              id={expense.id}
              key={expense.id}
              title={expense.title}
              type={expense.type}
              amount={expense.amount}
              date={expense.date}
              onExpenseId={expenseIdHandler}
            />
          ))
        )}
      </Card>
    </>
  );
};

export default ExpensesContainer;
