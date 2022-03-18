import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Crud() {
  const [users, setUsers] = useState([]);
  const usersCheck = useEffect(() => {
    axios
      .get('https://6018e358971d850017a4058a.mockapi.io/api/v1/Users')
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Action</td>
          </tr>
        </thead>
        {users.map((user) => {
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <input type="button" Value="Edit" />
            </td>
          </tr>;
        })}
      </table>
    </>
  );
}
