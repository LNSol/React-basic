import { useRef, useMemo, useState } from 'react';
import Profile from './Profile';
import Login from './Login';
import { useSession } from '../hooks/session-context';

export const My = () => {
  const [subTitle, setSubTitle] = useState('');
  const { session, removeCartItem, addCartItem } = useSession();
  const itemIdRef = useRef();
  const itemNameRef = useRef();
  const itemPriceRef = useRef();
  console.log('My.session>>>', session);

  const submit = (evt) => {
    evt.preventDefault();
    addCartItem(
      itemIdRef.current.value,
      itemNameRef.current.value,
      parseInt(itemPriceRef.current.value)
    );
    itemIdRef.current.value = '';
    itemNameRef.current.value = '';
    itemPriceRef.current.value = '';
  };

  // const totalPrice = () => {
  //   console.log('calc!@@@@!');
  //   return session.cart.reduce((s, { price }) => (s += price), 0);
  // };
  const memoTotalPrice = useMemo(() => {
    console.log('calc!@@@!');
    return session.cart.reduce((s, { price }) => (s += price), 0);
  }, [session]);

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
        <div>
          Item Price: <input type='text' ref={itemPriceRef} />
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
      <div>
        <h5>소제목: {subTitle}</h5>
        <strong>Sum: {memoTotalPrice}원</strong> <br />
        <input
          type='text'
          value={subTitle}
          onChange={(evt) => setSubTitle(evt.target.value)}
        />
      </div>
    </>
  );
};
