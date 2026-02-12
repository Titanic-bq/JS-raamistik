import { useState} from "react"
import './Expenses.css'
import Card from '../../UI/Card.jsx'       
import ExpensesFilter from './ExpensesFilter.jsx';
import ExpensesList from './ExpensesList.jsx';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');
  const filterChangeHandler = (year) => {
    setFilteredYear(year)
  };

  const filteredExpenses = props.expenses.filter((expense) => {
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