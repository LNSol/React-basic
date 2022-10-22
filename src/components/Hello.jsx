import { useState, useEffect } from 'react';
import { useCount } from '../hooks/counter-context';

export const Hello = ({ name, age, isMale, children }) => {
  // console.log('@@@@@ Hello');
  const [isActive, setActive] = useState(false);
  const { plusCount } = useCount();
  const [badSec, setBadSec] = useState(0);
  const [goodSec, setGoodSec] = useState(0);

  useEffect(() => {
    const invl = setInterval(() => {
      setGoodSec((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(invl);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setBadSec((pre) => pre + 1);
    }, 1000);
  }, []);

  return (
    <>
      {/* <input type='text' onChange={rerender} /> */}
      <h1 style={{ backgroundColor: 'gray', width: '80%' }}>
        <span style={{ float: 'left', color: 'yellow' }}>{badSec} sec</span>
        <span style={{ float: 'right', color: 'green' }}>{goodSec} sec</span>
        Hello,
        {name}
        {age && (isMale ? '군' : '양')}({age ? age : 25}
        )!
      </h1>
      {children}
      <div>
        <p>회원등급: {isActive ? '정' : '준'}회원</p>
        <button onClick={() => setActive(!isActive)}>Toggle</button>
        <button onClick={() => plusCount()}>Count++</button>
      </div>
    </>
  );
};
Hello.defaultProps = { name: 'World', isMale: false };
