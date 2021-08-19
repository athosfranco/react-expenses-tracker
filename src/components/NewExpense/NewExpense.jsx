import ExpenseForm from "./ExpenseForm.jsx";
import "../styles/NewExpense.css";

const NewExpense = (props) => {
  const getRandomID = (min, max) => {
    let id = String(Math.floor(Math.random() * (max - min) + min));
    let checkIfIdAlreadyTaken = props.expenses.find((val) => val.id === id);
    if (checkIfIdAlreadyTaken === undefined) return id;
    else getRandomID(1000, 9999);
  };

  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: getRandomID(1000, 9999),
      ...enteredExpenseData,
    };

    props.onGetNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
