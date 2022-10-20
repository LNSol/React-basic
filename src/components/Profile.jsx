// import { v4 } from 'uuid';
import { useEffect } from 'react';
import { useSession } from '../hooks/session-context';
import { useCount } from '../hooks/counter-context';

const Profile = () => {
  const { session, logout } = useSession();
  const { minusCount } = useCount();

  useEffect(() => {
    minusCount();
  }, []);

  return (
    <>
      <div>User ID: {session.loginUser?.name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Profile;
