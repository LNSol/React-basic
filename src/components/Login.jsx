import { useRef, useEffect } from 'react';
import { useSession } from '../hooks/session-context';
import { useCount } from '../hooks/counter-context';

const Login = () => {
  const { login } = useSession();
  const { plusCount } = useCount();
  const userIdRef = useRef();
  const userNameRef = useRef();

  // fetch('/data/sample.json')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('data >>> ', data);
  //   });

  useEffect(() => {
    plusCount();
  }, []);

  const submit = (evt) => {
    evt.preventDefault();
    login(userIdRef.current.value, userNameRef.current.value);
  };

  return (
    <form onSubmit={submit}>
      <div>
        User ID(숫자): <input type='text' ref={userIdRef} />
      </div>
      <div>
        User Name: <input type='text' ref={userNameRef} />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
