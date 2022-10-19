import { useRef } from 'react';
import { useSession } from '../hooks/session-context';

const Login = () => {
  const { login } = useSession();
  const userIdRef = useRef();
  const userNameRef = useRef();

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
