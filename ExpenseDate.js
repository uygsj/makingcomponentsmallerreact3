function ExpenseDate(props) {
    const date = new Date(props.date);
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}

export default ExpenseDate;
