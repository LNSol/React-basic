import { createContext, useContext, useState } from 'react';
import SampleSession from '../../public/data/sample.json';

const SessionContext = createContext();
// const sampleSession = {
//   loginUser: { id: 1, name: 'Hong' },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 102, name: '파', price: 5000 },
//   ],
// };

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(SampleSession);

  const logout = () => setSession({ ...session, loginUser: null });
  const addCartItem = (id, name, price) => {
    const maxId = Math.max(...session.cart.map((item) => item.id), 0); // mapBy
    session.cart.push({ id: maxId + 1, name, price });
    setSession({ ...session });
    //bad
    // setSession({
    //   ...session,
    //   cart: session.cart.concat({ id, name, price }),
    // });
  };
  const removeCartItem = (itemId) => {
    setSession({
      ...session,
      cart: session.cart.filter(({ id }) => id !== itemId),
    });
  };
  const login = (id, name) => {
    setSession({
      ...session,
      loginUser: { id, name },
      cart: [],
    });
  };

  return (
    <SessionContext.Provider
      value={{ session, logout, login, addCartItem, removeCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};
export const useSession = () => useContext(SessionContext);
