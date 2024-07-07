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
      .then((res) => res.json())
      .then((data) => {
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
          <select
            id="category"
            name="category"
            onChange={handleTextChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Dining">Dining</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Groceries">Groceries</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Insurance">Insurance</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Savings">Savings</option>
            <option value="Transportation">Transportation</option>
            <option value="Travel">Travel</option>
            <option value="Utilities">Utilities</option>
          </select>
        </div>
        <div>
          <label htmlFor="item_name">Transaction Name</label>
          <input
            id="item_name"
            type="text"
            value={currTransaction.item_name}
            onChange={handleTextChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="from">Merchant</label>
          <input
            id="from"
            type="from"
            value={currTransaction.from}
            onChange={handleTextChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={currTransaction.amount}
            onChange={handleTextChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={currTransaction.date}
            onChange={handleTextChange}
            required
            autoComplete="off"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
