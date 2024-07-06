import './Transaction.scss';

export default function Transaction({ transaction }) {
  return (
    <tr className="Transaction">
      <td>{transaction.item_name}</td>
      <td>{transaction.category}</td>
      <td>{transaction.from}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.date}</td>
    </tr>
  );
}
