import React from "react";
import "./ExpensesList.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map(function (value) {
        return (
          <ExpenseItem
            key={value.id}
            date={value.date}
            title={value.title}
            amount={value.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
