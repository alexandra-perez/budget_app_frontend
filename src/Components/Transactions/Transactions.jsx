import { useState, useEffect } from 'react';
import DonutChart from '../DonutChart/DonutChart';
import Transaction from '../Transaction/Transaction';

import './Transactions.scss';

const API = import.meta.env.VITE_API_URL;

export default function Transactions() {
  let balance = 0;
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        // console.log(resJSON);
        setTransactions(resJSON);
      });
  }, []);

  return (
    <div className="Transactions">
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            balance += parseInt(transaction.amount);
            return (
              <Transaction
                key={transaction.id}
                transaction={transaction}
                balance={balance}
              />
            );
          })}
        </tbody>
      </table>
      <div
        className={`balance ${
          balance > 100 ? 'green' : balance >= 0 ? 'yellow' : 'red'
        }`}
      >
        <h1>Available Balance: ${balance.toFixed(2)}</h1>
      </div>{' '}
      <div className="data">
        <h2>Budget Data</h2>
        <DonutChart transactions={transactions} />
      </div>
    </div>
  );
}
