import React from "react";
import "./ExpenseTable.css"; // Optional if you're using custom CSS

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount ($)</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>{exp.amount}</td>
            <td>{exp.category}</td>
            <td>
              <button onClick={() => onDelete(exp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
