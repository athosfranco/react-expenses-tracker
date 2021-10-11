import React, { useState, useRef } from "react";
import "../styles/ExpenseForm.css";
import getDateYMD from "../Expenses/GetDateFunction.js";
import { NotificationManager } from "react-notifications";

const ExpenseForm = (props) => {
  //Refs
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  //Data de hoje
  const today = getDateYMD();

  //Form state
  const [newExpenseIsOpen, setNewExpenseIsOpen] = useState(false);

  //State que controla o tipo escolhido no select
  const [typeInput, setTypeInput] = useState("");

  //class handlers
  const [titleInputClass, setTitleInputClass] = useState(
    "new-expense__control__input"
  );
  const [amountInputClass, setAmountInputClass] = useState(
    "new-expense__control__input"
  );

  //mensagens de erro
  const [titleErrorMsg, setTitleErrorMsg] = useState("");
  const [amountErrorMsg, setAmountErrorMsg] = useState("");

  //handler que modifica o tipo da despesa escolhido no select
  const changeTypeHandler = (e) => {
    setTypeInput(e.target.value);
  };

  //Função executada no Submit do formulário
  const submitHandler = (e) => {
    let validationTests = 2;
    e.preventDefault();
    titleInputRef.current.value.trim();

    //Validação do formulário
    if (
      titleInputRef.current.value.length <= 2 ||
      !titleInputRef.current.value.replace(/\s/g, "").length
    ) {
      setTitleInputClass("new-expense__control__error");
      setTitleErrorMsg(`O título precisa ter pelo menos 3 caracteres.`);
      !titleInputRef.current.value.replace(/\s/g, "").length
        ? (titleInputRef.current.value = "")
        : console.log("no empty spaces");
      validationTests--;
    } else {
      setTitleInputClass("new-expense__control__input");
      setTitleErrorMsg(``);
    }
    if (
      amountInputRef.current.value <= 0 ||
      amountInputRef.current.value > 999999
    ) {
      setAmountInputClass("new-expense__control__error");
      setAmountErrorMsg(
        "O valor precisa ser maior que zero e menor que 999,999."
      );
      validationTests--;
    } else {
      setAmountInputClass("new-expense__control__input");
      setAmountErrorMsg("");
    }

    //se passar na validação, gera um object com os dados da despesa
    if (validationTests === 2) {
      const expenseData = {
        title: titleInputRef.current.value,
        amount: +amountInputRef.current.value,
        date: dateInputRef.current.value,
        year: dateInputRef.current.value.split("-")[0], //Pega apenas o ano que será usado como filtro
        type: typeInput === "" ? "Geral" : typeInput, //Se o tipo nao for especificado, é definido como 'geral'
      };
      // console.log(expenseData);
      NotificationManager.success(
        `Despesa do tipo "${expenseData.type}" registrada em ${expenseData.date
          .split("-")
          .reverse()
          .join("/")}`,
        `${expenseData.title}`
      );
      props.onExpenseData(expenseData); //data 'lift up'
      titleInputRef.current.value = "";
      dateInputRef.current.value = today;
      amountInputRef.current.value = "";
    } else console.log("failed validation tests");
  };

  const ToggleNewExpense = () => setNewExpenseIsOpen(!newExpenseIsOpen);

  return (
    <>
      {newExpenseIsOpen ? (
        <>
          <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Título/Descrição</label>
                <input
                  className={titleInputClass}
                  autoFocus
                  type="text"
                  maxLength="15"
                  ref={titleInputRef}
                />
                <p>{titleErrorMsg}</p>
              </div>
              <div className="new-expense__control">
                <label>Valor da despesa</label>
                <input
                  className={amountInputClass}
                  type="number"
                  step="0.05"
                  ref={amountInputRef}
                />
                <p>{amountErrorMsg}</p>
              </div>
              <div className="new-expense__control">
                <label>Tipo de Despesa</label>
                <select
                  onChange={changeTypeHandler}
                  className="new-expense__control__select"
                  defaultValue="geral"
                >
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
                <input
                  type="date"
                  min="2018-01-01"
                  max={today}
                  className="new-expense__control__input"
                  ref={dateInputRef}
                />
              </div>

              <div className="new-expense__actions">
                <button onClick={ToggleNewExpense}>Cancelar</button>
                <button>Adicionar Despesa</button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <button onClick={ToggleNewExpense}>Nova Despesa</button>
      )}
    </>
  );
};

export default ExpenseForm;
