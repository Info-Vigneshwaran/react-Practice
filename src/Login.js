import React, { useState, useEffect } from 'react';

export default function Login() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('user', user);
    setUser({});
  };
  useEffect(() => {
    let local_user = localStorage.getItem('user');

    if (local_user) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogout = () => {
    let local_user = localStorage.removeItem('user');
    setLogin(false);
  };
  return (
    <>
      <h3>Log{login === false ? 'in' : 'out'}</h3>
      {login === false ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            value={user.name}
            onChange={handleInput}
          />
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={handleInput}
          />
          <input type="submit" value="login" />
        </form>
      ) : (
        <form>
          <input type="button" value="Logout" onClick={handleLogout} />
        </form>
      )}
    </>
  );
}
