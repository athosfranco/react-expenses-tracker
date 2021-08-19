import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "./Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import "./styles/ExpensesContainer.css";

const ExpensesContainer = (props) => {
  const isExpenseListEmpty = props.expenses.length === 0 ? true : false;
  const currentYear = String(new Date().getFullYear());
  let [pickedYear, setPickedYear] = useState(currentYear);

  const pickedYearHandler = (data) => setPickedYear(data);

  return (
    <>
      <Card className="expenses">
        <button
          onClick={function () {
            console.log(pickedYear);
            console.log(isExpenseListEmpty);
          }}
        >
          Click
        </button>
        <ExpensesFilter
          selectedYear={pickedYear}
          onGetPickedYear={pickedYearHandler} //Essa prop 'envia' a função pickedYearHandler para o componente filho
        />

        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            type={expense.type}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
};

export default ExpensesContainer;
