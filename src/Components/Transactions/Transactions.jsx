import { useState, useEffect } from 'react';
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
            balance += transaction.amount;
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
          balance >= 0 && balance < 100 ? `yellow` : `red`
        }`}
      >
        <h1>Total Balance: ${balance}</h1>
      </div>
    </div>
  );
}
