import Profile from '../../Components/Profile/Profile';
import './ProfilePg.scss';

export default function ProfilePg({ user, setUser }) {
  return <Profile user={user} setUser={setUser} />;
}
