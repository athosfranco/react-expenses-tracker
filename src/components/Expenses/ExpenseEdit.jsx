import React, { useState } from "react";
import "../styles/ExpenseEdit.css";
import getDateYMD from "./GetDateFunction.js";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const ExpenseEdit = (props) => {
  //Data de hoje
  const today = getDateYMD();

  //Pega a expense que está sendo editada
  let editingExpense = props.expenses.filter(
    (expense) => expense.id === props.editedExpense
  );

  //States controlando as mensagens de erro
  const [titleEditErrorMsg, setTitleEditErrorMsg] = useState("");
  const [amountEditErrorMsg, setAmountEditErrorMsg] = useState("");

  //States controlando os inputs
  const [titleEditInput, setTitleEditInput] = useState(
    editingExpense[0]?.title
  );
  const [amountEditInput, setAmountEditInput] = useState(
    editingExpense[0]?.amount
  );
  const [dateEditInput, setDateEditInput] = useState(editingExpense[0]?.date);
  const [typeEditInput, setTypeEditInput] = useState(editingExpense[0]?.type);
  const [yearInput, setYearInput] = useState(editingExpense[0]?.year);

  //Input handlers
  const editTitleHandler = (e) => setTitleEditInput(e.target.value);
  const editAmountHandler = (e) => setAmountEditInput(e.target.value);
  const editDateHandler = (e) => {
    let date = e.target.value;
    setDateEditInput(date);
    let dateYear = date.split("-")[0];
    setYearInput(dateYear);
  };

  const editTypeHandler = (e) => setTypeEditInput(e.target.value);

  //Cancelar modal (Este data vai subir para App.jsx que vai atualizar o state)
  const cancelHandler = (e) => {
    e.preventDefault();
    props.onGetCanceled("no id yet");
  };

  //Deletar despesa
  const deleteExpenseHandler = (e) => {
    e.preventDefault();
    const expenseListTemp = JSON.parse(localStorage.getItem("expensesArray"));
    const expenseListAfterDeletion = expenseListTemp.filter(
      (expenseToBeDeleted) => expenseToBeDeleted.id !== props.editedExpense
    );
    localStorage.setItem(
      "expensesArray",
      JSON.stringify(expenseListAfterDeletion)
    );
    NotificationManager.info(
      `A despesa '${editingExpense[0]?.title}' foi excluída.`
    );
    props.onGetDeleted();
  };

  //Função executada quando o formulário sofre submit
  const saveHandler = (e) => {
    e.preventDefault();
    let validationTests = 2;

    //Validação do formulário
    if (
      titleEditInput.length <= 2 ||
      !titleEditInput.replace(/\s/g, "").length
    ) {
      setTitleEditErrorMsg(`Deve ter ao menos 3 caracteres.`);
      !titleEditInput.replace(/\s/g, "").length
        ? setTitleEditInput("")
        : console.log("no empty spaces");
      validationTests--;
    } else {
      setTitleEditErrorMsg(``);
      titleEditInput.trim();
    }
    if (amountEditInput <= 0 || amountEditInput > 999999) {
      setAmountEditErrorMsg("Valor deve ser entre 1 e 999,999.");
      validationTests--;
    } else setAmountEditErrorMsg("");

    //se passar na validação, atualiza as informações
    if (validationTests === 2) {
      const updatedExpenseList = JSON.parse(
        localStorage.getItem("expensesArray")
      );
      //Salvou alterações
      updatedExpenseList.forEach((expenseToBeEdited) => {
        if (expenseToBeEdited.id === props.editedExpense) {
          expenseToBeEdited.title = titleEditInput;
          expenseToBeEdited.amount = +amountEditInput;
          expenseToBeEdited.date = dateEditInput;
          expenseToBeEdited.year = yearInput;
          expenseToBeEdited.type = typeEditInput;
        }
      });
      NotificationManager.success("Despesa editada com sucesso.");
      props.onUpdateUi(updatedExpenseList);
      props.onGetCanceled("no id yet");
    }
  };

  return (
    <>
      <div
        className="overlay"
        style={{ display: props.show ? "flex" : "none" }}
      ></div>
      <div
        className="expense-edit__container"
        style={{ display: props.show ? "flex" : "none" }}
      >
        <h2>Editar Despesa</h2>
        <form onSubmit={saveHandler}>
          <div className="new-expense__control">
            {/* Editar Título da Despesa */}
            <label>Título/Descrição</label>
            <input
              className="new-expense__control__input"
              autoFocus
              type="text"
              placeholder={editingExpense[0]?.title}
              maxLength="15"
              onChange={editTitleHandler}
            />
            <p>{titleEditErrorMsg}</p>
          </div>
          <div className="new-expense__control">
            {/* Editar Valor da Despesa */}
            <label>Valor da despesa</label>
            <input
              className="new-expense__control__input"
              type="number"
              step="0.05"
              placeholder={editingExpense[0]?.amount}
              onChange={editAmountHandler}
            />
            <p>{amountEditErrorMsg}</p>
          </div>
          <div className="new-expense__control">
            {/* Editar Tipo da Despesa */}
            <label>Tipo de Despesa</label>
            <p
              style={{
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                margin: "0.5rem",
              }}
            >
              Tipo atual: {editingExpense[0]?.type}
            </p>

            <select
              className="new-expense__control__select"
              onChange={editTypeHandler}
              selected={String(editingExpense[0]?.type)}
            >
              <option selected disabled>
                Selecione um novo tipo
              </option>
              <option value="Geral">Geral</option>
              <option value="Contas & Impostos">Contas & Impostos</option>
              <option value="Lazer & Entretenimento">
                Lazer & Entretenimento
              </option>
              <option value="Saúde & Remédios">Saúde & Remédios</option>
              <option value="Academia">Academia & Educação Física</option>
              <option value="Transporte & Carro">Transporte & Carro</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Necessidades Domésticas">
                Necessidades Domésticas
              </option>
              <option value="Custos com Pet's">Custos com Pet's</option>
              <option value="Emergências">Emergências</option>
            </select>
          </div>
          <div className="new-expense__control">
            <label>Data</label>
            <p
              style={{
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                margin: "0.5rem",
              }}
            >
              Data atual:
              {editingExpense[0]?.date.split("-").reverse().join("/")}
            </p>
            <input
              type="date"
              min="2018-01-01"
              max={today}
              className="new-expense__control__input"
              onChange={editDateHandler}
            />
          </div>
          <div className="button-container">
            <button className="cancel" onClick={cancelHandler}>
              Cancelar
            </button>
            <button className="save">Salvar Alterações</button>
          </div>
          <hr />
          <button className="delete" onClick={deleteExpenseHandler}>
            Deletar Despesa
          </button>
        </form>
      </div>
      <NotificationContainer />
    </>
  );
};

export default ExpenseEdit;
