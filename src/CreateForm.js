import React, { useState, useEffect } from 'react';

export default function CreateForm() {
  const [user, setUser] = useState({ name: 'dfg', email: 'dfg' });
  const handleUser = (e) => {
    setUser((preUser) => {
      return { ...preUser, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {}, [user]);
  return (
    <>
      Name: <input type="text" name="name" onChange={handleUser} />
      <br />
      email: <input type="text" name="email" onChange={handleUser} />
      <h1>Created User</h1>
      <p>Name : {user && user ? user.name : '---'}</p>
      <p>Email: {user && user ? user.email : '---'}</p>
    </>
  );
}
