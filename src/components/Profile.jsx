// import { v4 } from 'uuid';
import { useSession } from '../hooks/session-context';

const Profile = () => {
  const { session, logout } = useSession();
  // const logout = evt => {
  //   evt.preventDefault();
  //   // session.loginUser = null;
  //   session = {};
  // }

  return (
    <>
      <div>User ID: {session.loginUser?.name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Profile;
