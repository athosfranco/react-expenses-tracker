import React, { useState } from "react";
import "../styles/ExpenseForm.css";

const ExpenseForm = (props) => {
  const getDateYMD = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const today = getDateYMD();

  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState(today);
  const [typeInput, setTypeInput] = useState("");

  // const [userInput, setUserInput] = useState({
  //   titleInput: "",
  //   amountInput: "",
  //   dateInput: "",
  // });

  const changeTitleHandler = (e) => {
    setTitleInput(e.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     setTitleInput: `${e.target.value}`,
    //   };
    // });
    // console.log(setUserInput.setTitleInput);
  };
  const changeAmountHandler = (e) => {
    setAmountInput(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   setAmountInput: e.target.value,
    // });
    // console.log(setUserInput.setAmountInput);
  };
  const changeDateHandler = (e) => {
    setDateInput(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   setDateInput: e.target.value,
    // });
    // console.log(setUserInput.setDateInput);
  };
  const changeTypeHandler = (e) => {
    setTypeInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //Aqui se cria um objeto que irá armazenar toda a informação inputada pelo usuário, usando a state variable atualizada
    const expenseData = {
      title: titleInput,
      amount: amountInput,
      date: new Date(dateInput),
      type: typeInput,
    };
    props.onExpenseData(expenseData);
    setTitleInput("");
    setDateInput(today);
    setAmountInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título/Descrição</label>
          <input
            autoFocus
            type="text"
            value={titleInput}
            onChange={changeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Valor da despesa</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
            value={amountInput}
          />
        </div>
        <div className="new-expense__control">
          <label>Tipo de Despesa</label>
          <select onChange={changeTypeHandler}>
            <option selected disabled hidden>
              Escolha um tipo de despesa.
            </option>
            <option>Contas & Impostos</option>
            <option>Necessidades Domésticas</option>
            <option>Lazer & Entretenimento</option>
            <option>Saúde & Remédios</option>
            <option>Educação</option>
            <option>Emergências</option>
            <option>Essenciais</option>
            <option>Transporte</option>
            <option>Alimentação</option>
            <option>Custos com Pet's</option>
          </select>
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={changeDateHandler}
            value={dateInput}
          />
        </div>

        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
