import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'       
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2025');

  console.log('Expenses: hetkel valitud aasta', filteredYear);
  console.log('Expenses: kõik kulud', props.items);

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses: sain ExpensesFilter-ist', selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log('Expenses: filtreeritud kulud', filteredExpenses);

  
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
            onChangeFilter={filterChangeHandler} />
  {filteredExpenses.length === 0 && (
        <p>Kulusid ei leitud</p>
      )}

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseData={expense}
        />
      ))}
        </Card>
    )
}

export default Expenses