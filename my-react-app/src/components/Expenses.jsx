import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'       
import ExpensesFilter from './ExpensesFilter';

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
            selected={filteredYear}
            onFilterChange={filterChangeHandler} />


            {props.items.map(expense => (

          <ExpenseItem
           key={expense.date} 
           expenseData={expense} 
           />
            ))}
        </Card>
    )
}

export default Expenses