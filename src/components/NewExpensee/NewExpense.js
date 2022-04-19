import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setEditting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditting(false);
  };

  const startEditHandler = () => {
    setEditting(true);
  };

  const stopEditHandler = () => {
    setEditting(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
