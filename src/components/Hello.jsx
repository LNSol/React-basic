import { useState } from 'react';
import { useCount } from '../hooks/counter-context';

export const Hello = ({ name, age, isMale, children }) => {
  // console.log('@@@@@ Hello');
  const [isActive, setActive] = useState(false);
  const { plusCount } = useCount();

  return (
    <>
      <h1 style={{ backgroundColor: 'gray' }}>
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
