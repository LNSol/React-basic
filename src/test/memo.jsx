import { useMemo, useState, useEffect } from 'react';

const MemoTest = () => {
  const [array, setArray] = useState([1, 2, 3]);
  const memoArray = useMemo(() => array, []);

  useEffect(() => {
    console.log('memo!@@@!');
  }, [memoArray]);

  return (
    <>
      <input type='text' onChange={() => setArray((prev) => prev.concat(10))} />
    </>
  );
};
export default MemoTest;
