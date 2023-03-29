import React from "react";

function ExpenseItem({ name, amount, date }) {
  // const { name, amount, date } = props;

  return (
    <div>
      <div>{name}</div>
      <div>{amount}</div>
      <div>{date}</div>
      <br />
    </div>
  );
}

export default ExpenseItem;
