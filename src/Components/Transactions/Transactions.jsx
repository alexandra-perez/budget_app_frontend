import { useState, useEffect } from 'react';
import Transaction from '../Transaction/Transaction';
import './Transactions.scss';

const API = import.meta.env.VITE_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        console.log(resJSON);
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
            <th>From</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
