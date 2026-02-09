
import { useState, useEffect } from "react";
import Expenses from "./components/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import "./App.css"



const App = () => {
    const DYMMY_EXPENSES =
    []

    const App = () => {
        const [expenses, setExpenses] = useState(DYMMY_EXPENSES);
 }

    const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
    setExpenses([expense, ...previousExpenses]);
}

return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses} />
    </div>
  );
}



export default App;
