import { createContext, useContext, useState } from 'react';

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((prevCount) => prevCount + 1);
  const minusCount = () => setCount((prevCount) => prevCount - 1);

  return (
    <CountContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CountContext.Provider>
  );
};
export const useCount = () => useContext(CountContext);
