import { useState} from "react"
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../Card'       
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');
  const filterChangeHandler = (year) => {
    setFilteredYear(year)
  };

  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear() == filteredYear
  });

  return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
};

export default Expenses