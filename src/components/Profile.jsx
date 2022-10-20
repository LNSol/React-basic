// import { v4 } from 'uuid';
import { useEffect } from 'react';
import { useSession } from '../hooks/session-context';
import { useCount } from '../hooks/counter-context';

const Profile = () => {
  const {
    session: {
      loginUser: { name },
    },
    logout,
  } = useSession();
  const { minusCount } = useCount();

  useEffect(() => {
    minusCount();
  }, []);

  return (
    <>
      <div>User ID: {name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default Profile;
