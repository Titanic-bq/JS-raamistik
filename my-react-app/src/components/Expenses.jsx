import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
    return (
        <div className="expenses">
            {props.items.map(expense => (
                <ExpenseItem key={expense.date} expenseData={expense} />
            ))}
        </div>
    )
}

export default Expenses