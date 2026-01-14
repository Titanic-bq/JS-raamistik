
import { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const submitHandler = (event) => {
 event.preventDefault();
 const expenseData = {
    title: enteredTitle,
    price: enteredPrice,
    date: new Date(enteredDate)
 };
   setEnteredTitle('')
  console.log("Form submitted!");
}

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                    onChange={titleChangeHandler}
                    value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2024-11-12" max="2027-01-31"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}


export default ExpenseForm;


