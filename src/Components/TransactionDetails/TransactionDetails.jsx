import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './TransactionDetails.scss';

export default function TransactionDetails() {
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

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        // console.log(resJSON);
        setCurrTransaction(resJSON);
      })
      .catch(() => {
        navigate('/notfound');
      });
  }, [id]);

  function deleteTransaction() {
    fetch(`${API}/transactions/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(currTransaction),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate('/transactions');
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="TransactionDetails">
      <h1>{currTransaction.item_name}</h1>
      <div className="details">
        <p>{currTransaction.from}</p>
        <p>{currTransaction.category}</p>
        <p>{currTransaction.date}</p>
        <p>${currTransaction.amount}</p>
      </div>
      <div className="buttons">
        <Link to={`/transactions/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={deleteTransaction}>Delete</button>
      </div>
    </div>
  );
}
