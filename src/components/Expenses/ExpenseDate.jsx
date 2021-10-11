import "../styles/ExpenseDate.css";

const ExpenseDate = (props) => {
  const dateString = props.date.split("-");

  const day = dateString[2];
  let month = dateString[1];
  switch (month) {
    case "01":
      month = "Jan.";
      break;

    case "02":
      month = "Fev.";
      break;

    case "03":
      month = "Mar.";
      break;

    case "04":
      month = "Abr.";
      break;

    case "05":
      month = "Maio";
      break;

    case "06":
      month = "Jun.";
      break;

    case "07":
      month = "Jul.";
      break;

    case "08":
      month = "Ago.";
      break;

    case "09":
      month = "Set.";
      break;

    case "10":
      month = "Out.";
      break;

    case "11":
      month = "Nov.";
      break;

    case "12":
      month = "Dez.";
      break;

    default:
      break;
  }
  const year = dateString[0];
  // const month = props.date.toLocaleString("pt-BR", { month: "short" });
  // const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  // const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day} </div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
