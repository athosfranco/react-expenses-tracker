import React from "react";
import "./styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card.jsx";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <div className="expense-item__descbox">
          <h2>{props.title}</h2>
          <span>{props.type}</span>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
