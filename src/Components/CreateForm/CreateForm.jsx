import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateForm.scss';

const API = import.meta.env.VITE_API_URL;

export default function CreateForm() {
  const [currTransaction, setCurrTransaction] = useState({
    item_name: '',
    amount: 0.0,
    date: '',
    from: '',
    category: '',
  });
  const navigate = useNavigate();

  function handleTextChange(e) {
    setCurrTransaction({
      ...currTransaction,
      [e.target.id]: e.target.value,
    });
  }

  function addTransaction() {
    fetch(`${API}/transactions`, {
      method: 'POST',
      body: JSON.stringify(currTransaction),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
         navigate(`/transactions/${data.id}`);
      })
      .catch((error) => console.error(error));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTransaction();
    setCurrTransaction({
      item_name: '',
      amount: 0.0,
      date: '',
      from: '',
      category: '',
    });
  }

  return (
    <div className="CreateForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="category"
            value={currTransaction.category}
            onChange={handleTextChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="item_name">Transaction Name</label>
          <input
            id="item_name"
            type="text"
            value={currTransaction.item_name}
            onChange={handleTextChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="from">Merchant</label>
          <input
            id="from"
            type="from"
            value={currTransaction.from}
            onChange={handleTextChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={currTransaction.amount}
            onChange={handleTextChange}
            // required
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={currTransaction.date}
            onChange={handleTextChange}
            // required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
