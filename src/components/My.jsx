import { useRef } from 'react';
import Profile from './Profile';
import Login from './Login';
import { useSession } from '../hooks/session-context';

export const My = () => {
  const { session, removeCartItem, addCartItem } = useSession();
  const itemIdRef = useRef();
  const itemNameRef = useRef();
  console.log('My.session>>>', session);

  const submit = (evt) => {
    evt.preventDefault();
    addCartItem(itemIdRef.current.value, itemNameRef.current.value);
    itemIdRef.current.value = '';
    itemNameRef.current.value = '';
  };

  return (
    <>
      {session.loginUser ? <Profile /> : <Login />}
      <form onSubmit={submit}>
        <div>
          Item No: <input type='text' ref={itemIdRef} />
        </div>
        <div>
          Item Name: <input type='text' ref={itemNameRef} />
        </div>
        <button type='submit'>Add</button>
      </form>
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
