import React, { useState } from "react";
import ReactDOM from "react-dom";
import ExpensesContainer from "./components/Expenses/ExpensesContainer.jsx";
import ExpenseEdit from "./components/Expenses/ExpenseEdit.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import { NotificationContainer } from "react-notifications";

const expenses = []; //inicializa a array de despesas

const App = () => {
  const [expensesList, setExpensesList] = useState(
    //Verifica se há despesas armazenadas no localStorage. SE houver, retorna essas despesas. Caso nao haja,
    //retorna a array 'expenses' vazia.
    localStorage.expensesArray
      ? JSON.parse(localStorage.expensesArray)
      : expenses
  );

  const [idOfExpenseBeingEdited, setIdOfExpenseBeingEdited] =
    useState("no id yet");

  const newExpenseHandler = (newExpense) => {
    setExpensesList((prevExpenses) => {
      let expensesArray = [newExpense, ...prevExpenses];
      localStorage.setItem("expensesArray", JSON.stringify(expensesArray));
      return expensesArray;
    });
  };

  const expenseIdHandler = (id) => setIdOfExpenseBeingEdited(id);

  const canceledEditHandler = (dataFromExpenseEdit) => {
    setIdOfExpenseBeingEdited(dataFromExpenseEdit);
  };

  const deletedExpenseHandler = () => {
    setExpensesList(JSON.parse(localStorage.expensesArray));
    setIdOfExpenseBeingEdited("no id yet");
  };

  const updateUiHandler = (updatedExpenseList) => {
    localStorage.setItem("expensesArray", JSON.stringify(updatedExpenseList));
    setExpensesList(updatedExpenseList);
  };

  return (
    <div>
      <NewExpense expenses={expenses} onGetNewExpense={newExpenseHandler} />
      <ExpensesContainer
        expenses={expensesList}
        onExpenseId={expenseIdHandler}
      />
      {idOfExpenseBeingEdited === "no id yet"
        ? console.log("no expense being edited")
        : ReactDOM.createPortal(
            <ExpenseEdit
              expenses={expensesList}
              editedExpense={idOfExpenseBeingEdited}
              show={idOfExpenseBeingEdited === "no id yet" ? false : true}
              onGetCanceled={canceledEditHandler}
              onGetDeleted={deletedExpenseHandler}
              onUpdateUi={updateUiHandler}
            />,
            document.getElementById("overlay-root")
          )}
      {ReactDOM.createPortal(
        <NotificationContainer />,
        document.getElementById("notification-root")
      )}
    </div>
  );
};

export default App;
