import { Link } from 'react-router-dom';
import './Transaction.scss';

const API = import.meta.env.VITE_API_URL;

export default function Transaction({ transaction }) {
  return (
    <tr className="Transaction">
      <td>
        <Link to={`/transactions/${transaction.id}`}>{transaction.date}</Link>
      </td>
      <td>
        <Link to={`/transactions/${transaction.id}`}>
          {transaction.item_name}
        </Link>
      </td>
      <td>
        <Link to={`/transactions/${transaction.id}`}>
          {transaction.category}
        </Link>
      </td>
      <td>
        <Link to={`/transactions/${transaction.id}`}>{transaction.from}</Link>
      </td>
      <td>
        <Link to={`/transactions/${transaction.id}`}>
          ${parseFloat(transaction.amount).toFixed(2)}
        </Link>
      </td>
    </tr>
  );
}
