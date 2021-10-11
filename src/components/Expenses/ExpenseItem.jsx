import React from "react";
import "../styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card.jsx";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    props.onExpenseId(props.id);
  };

  return (
    <>
      <Card className="expense-item" onClick={clickHandler}>
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
          <div className="expense-item__descbox">
            <h2>{props.title}</h2>
            <span>{props.type}</span>
          </div>
          <div className="expense-item__price">
            {props.amount.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
      </Card>
    </>
  );
};

export default ExpenseItem;
