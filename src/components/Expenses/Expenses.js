import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const { items } = props;
  const [enteredYear, setEnteredYear] = useState("2022");

  const yearFilter = (year) => {
    setEnteredYear(year);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <li style={{ listStyleType: "none" }}>
      <Card className="expenses">
        <ExpensesFilter selected={enteredYear} onChoosingYear={yearFilter} />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
