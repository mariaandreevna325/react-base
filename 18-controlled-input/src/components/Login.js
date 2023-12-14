import { useState } from 'react';
function Login() {
  const [data, setData] = useState({ user: '', password: '' });
  function handelFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    // alert(JSON.stringify(userData));
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value });
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handelFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.user}
            onChange={(e) => handleInputChange(e, 'user')}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
