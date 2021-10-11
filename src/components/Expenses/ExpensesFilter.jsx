import React from "react";
import "../styles/ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const currentYear = new Date().getFullYear();

  const pickYearHandler = (e) => props.onGetPickedYear(e.target.value); //props.onGetPickedYear invoca a função 'pickedYearHandler' armazenada no componente pai (ExpensesContainer) e envia e.target.value como parâmetro para essa função.

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select onChange={pickYearHandler}>
          <option value="all">Mostrar tudo</option>
          <option value={currentYear}>{currentYear}</option>
          <option value={currentYear - 1}>{currentYear - 1}</option>
          <option value={currentYear - 2}>{currentYear - 2}</option>
          <option value={currentYear - 3}>{currentYear - 3}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
