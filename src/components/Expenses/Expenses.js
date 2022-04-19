import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const ExpensesFilterhandler = (year) => {
    console.log("expense.js");
    console.log(year);
    setSelectedYear(year);
  };

  const filterExpenses = props.expenses.filter(function (expense) {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilterYear={ExpensesFilterhandler}
      />
      <ExpensesChart expenses={filterExpenses}/>
      <ExpensesList item={filterExpenses} />
    </Card>
  );
}

export default Expenses;
