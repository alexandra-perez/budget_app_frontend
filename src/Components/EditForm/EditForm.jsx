import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditForm.scss';

export default function EditForm() {
  const [currTransaction, setCurrTransaction] = useState({
    item_name: '',
    amount: 0.0,
    date: '',
    from: '',
    category: '',
  });
  let { id } = useParams();
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  function handleTextChange(e) {
    setCurrTransaction({
      ...currTransaction,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateTransaction();
    setCurrTransaction({
      item_name: '',
      amount: 0.0,
      date: '',
      from: '',
      category: '',
    });
  }

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        setCurrTransaction(resJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function updateTransaction() {
    fetch(`${API}/transactions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(currTransaction),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate(`/transactions/${id}`);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="EditForm">
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
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
