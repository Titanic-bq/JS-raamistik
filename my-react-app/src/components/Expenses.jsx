import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'       
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const filterYearHandler= (selectedYear) => {
        console.log("Year data in Expenses.jsx" + selectedYear);
    };



    props.expenses.map((expense) => {
       console.log(expense)
    });
};

    




function Expenses(props) {

      const [filteredYear, setFilteredYear] = useState('2025');
  console.log('Expenses: hetkel valitud aasta', filteredYear);

   const filterChangeHandler = (selectedYear) => {
    console.log('Expenses: sain ExpensesFilter-ist', selectedYear);
    setFilteredYear(selectedYear);
  };
    return (
        <Card className="expenses">
            <ExpensesFilter
            onChangeFilter={filterChangeHandler} />


            {props.items.map(expense => {
                return <ExpenseItem expenseData={expense}
                key={expense.id}
            />;
            })
            }
        </Card>
    )
}

export default Expenses