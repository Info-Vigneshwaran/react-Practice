import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Crud() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: '', id: '' });
  const [editing, setEditing] = useState(false);
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

  const handleChange = (e) => {
    setUser((prevUser) => {
      return { ...prevUser, [e.target.name]: e.target.value };
    });
    console.log(user);
  };
  const handleEdit = (id) => {
    let new_user = users.find((user) => {
      return user.id == id;
    });
    setEditing(true);
    setUser({ id: new_user.id, name: new_user.name });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let new_user = { id: users.length + 1, name: user.name };
    setUsers([...users, new_user]);
    console.log(new_user);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setUsers(
      users.map((old_user) => {
        return old_user.id == user.id
          ? { ...old_user, name: user.name }
          : { ...old_user };
      })
    );
    setUser({ name: '', id: '' });
  };

  return (
    <>
      {editing === false ? (
        <form onSubmit={handleAdd}>
          <input
            type="text"
            onChange={handleChange}
            name="id"
            value={user.id}
          />
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={user.name}
          />
          <input type="submit" value="Add" />
        </form>
      ) : (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            onChange={handleChange}
            name="id"
            value={user.id}
          />
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={user.name}
          />
          <input type="submit" value="Update" />
        </form>
      )}

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tbody>
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
        </tbody>
      </table>
    </>
  );
}
