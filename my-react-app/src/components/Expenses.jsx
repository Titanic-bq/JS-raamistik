import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'       

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.items.map(expense => (
                <ExpenseItem key={expense.date} expenseData={expense} />
            ))}
        </Card>
    )
}

export default Expenses