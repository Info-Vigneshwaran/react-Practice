import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Crud() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  const handleRemove = (id) => {
    let new_users = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(new_users);
    console.log(new_users);
  };

  const handleEdit = (id) => {
    let new_user = users.find((user) => {
      return user.id == id;
    });
  };

  return (
    <>
      <input type="text" />
      <input type="text" />
      <input type="button" value="Add" onClick={(e) => handleRemove(list.id)} />
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {users.map((list, key) => {
          return (
            <tr key={key}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>
                <input
                  type="button"
                  value="Remove"
                  onClick={(e) => handleRemove(list.id)}
                />

                <input
                  type="button"
                  value="Edit"
                  onClick={(e) => handleEdit(list.id)}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
