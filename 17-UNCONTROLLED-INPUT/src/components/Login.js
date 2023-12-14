import { useState } from 'react';
function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  function handelFormSubmit(event) {
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(userData);
    // alert(JSON.stringify(userData));
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handelFormSubmit}>
        <label>
          Username:{' '}
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            name="username"
          />
        </label>

        <label>
          Password: <input type="password" value={password} name="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
