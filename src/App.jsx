// import { useState } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';
import { useCount } from './hooks/counter-context';
import { SessionProvider } from './hooks/session-context';
// import MemoTest from './test/memo';

function App() {
  const { count } = useCount();

  return (
    <div className='App'>
      <header className='App-header'>
        <SessionProvider>
          <My />
        </SessionProvider>

        <h2>Count: {count}</h2>
        <Hello name='Hong' isMale={true} />
        {/* <Hello age={0} /> */}
        {/* <Hello name='홍길동' age={30}><h3>반갑습니다~</h3></Hello> */}
      </header>
    </div>
    // <>
    //   <MemoTest />
    // </>
  );
}

export default App;
