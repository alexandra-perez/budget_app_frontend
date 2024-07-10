import Transactions from '../../Components/Transactions/Transactions';
import "./Index.scss";

export default function Index({user, setUser}) {
  return (
    <div className="Index">
      <Transactions user={user} setUser={setUser} />
    </div>
  );
}
