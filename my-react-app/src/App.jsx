import ExpenseItem from "./components/ExpenseItem.jsx";
import "./App.css"


const App = () => {
    const expenses =[
        {
            date: new Date(2024, 10, 12),
            title: "New book" ,
            price: 30.99
        },
         {
            date: new Date(2024, 10, 12),
            title: "New Jeans" ,
            price: 99.99
        }
    ]
return (
    <div className="App">
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
      <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
    </div>
  );
}

export default App;
