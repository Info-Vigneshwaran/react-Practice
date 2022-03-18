import React, { useState, useEffect, useCallback } from 'react';

export default function CreateForm() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [empty, setEmpty] = useState('');
  const handleUser = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
    setEmpty('test');
  };

  useEffect(() => {
    handleCheck();
  }, [empty]);

  useCallback(() => {
    handleCheck();
  }, [empty]);

  const handleCheck = () => {};
  useEffect(() => {}, [user]);
  return (
    <>
      Name: <input type="text" name="name" onChange={handleUser} />
      <br />
      email: <input type="text" name="email" onChange={handleUser} />
      <h1>Created User</h1>
      <p>Name : {user && user.name != '' ? user.name : '---'}</p>
      <p>Email : {user && user.email != '' ? user.email : '---'}</p>
    </>
  );
}
