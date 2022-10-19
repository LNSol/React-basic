import Profile from './Profile';
import Login from './Login';
import { useSession } from '../hooks/session-context';

export const My = () => {
  const { session, removeCartItem } = useSession();
  console.log('My.session>>>', session);
  return (
    <>
      {session.loginUser ? <Profile /> : <Login />}
      <ul>
        {session?.cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeCartItem(item.id)}>DEL</button>
          </li>
        ))}
      </ul>
    </>
  );
};
