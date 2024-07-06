import './Nav.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <Link to="/">
          <li>BudgetBuddy</li>
        </Link>
        <Link to="/transactions">
          <li>My Transactions</li>
        </Link>
        <li>Add New Transaction</li>
      </ul>
    </nav>
  );
}
