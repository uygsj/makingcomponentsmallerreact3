import React from 'react';
import ExpenseDate from './ExpenseDate';
function ExpenseDetails(props) {
    return (
        <div className="expense-details">
            <p>Title: {props.title}</p>
            <p>Amount: {props.amount}</p>
            <p>Location: {props.location}</p>
        </div>
    );
}

function ExpenseItem(props) {

    return (
        <div className='expense-item'>

        <ExpenseDate date ={props.date} />
        <h2>ExpenseDetails</h2>
        
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        </div>
    );
}

export default ExpenseItem;
