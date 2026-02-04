

import Expenses from "./components/Expenses.jsx";
import NewExpense from "./UI/NewExpense/NewExpense.jsx";
import "./App.css"



const App = () => {
    const DYMMY_EXPENSES =[
        {
            id:"id1",
            date: new Date(2024, 10, 12),
            title: "New book" ,
            price: 30.99
        },
         {
            id:"id2",
            date: new Date(2024, 10, 12),
            title: "New Jeans" ,
            price: 99.99
        },
        {
            id:"id3",
            date: new Date(2024, 10, 25),
            title: "New Phone" ,
            price: 599.99
        }
    ];

    const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
}

return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={DYMMY_EXPENSES} />
    </div>
  );
}



export default App;
