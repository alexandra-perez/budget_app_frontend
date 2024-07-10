import { useState, useEffect } from 'react';
import DonutChart from '../DonutChart/DonutChart';
import Transaction from '../Transaction/Transaction';

import './Transactions.scss';

const API = import.meta.env.VITE_API_URL;

export default function Transactions({ user, setUser }) {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        setTransactions(resJSON);
      });
  }, []);

  useEffect(() => {
    const sum = transactions.reduce(
      (sum, curr) => Math.abs(+sum) + +Math.abs(+curr.amount),
      0
    );
    setTotal(sum);
  }, [transactions]);

  return (
    <div className="Transactions">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Category</th>
            <th>Merchant</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          })}
        </tbody>
      </table>
      <div>
        <h1 className="total">
          Transaction(s) Total:{' '}
          <span className={` ${total > user.monthlyBudget ? 'green' : 'red'}`}>
            ${parseFloat(total).toFixed(2)}
          </span>
        </h1>
      </div>{' '}
      <div className="details">
        <div className="data">
          <h2>Transactions by Category</h2>
          <DonutChart transactions={transactions} />
        </div>
        <div className="insights">
          <h2>% Allocated vs Budget</h2>
          <p>
            {total} spent of {user.monthlyBudget} budget
          </p>
        </div>
      </div>
    </div>
  );
}
