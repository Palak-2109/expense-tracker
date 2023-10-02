import './ExpenseDate.css'
import Card from '../UI/Card'
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-IN',{month:'long'})
    const year = props.date.toLocaleString('en-IN',{year:'numeric'})
    const day = props.date.toLocaleString('en-IN', {day:'numeric'})
    return (
        <Card className='expense-date'>
            <div className='expense-date-month'>{month}</div>
            <div className='expense-date-year'>{year}</div>
            <div className='expense-date-day'>{day}</div>
        </Card>
    );
}
export default ExpenseDate