import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Crud() {
  const [users, setUsers] = useState([]);

  return (
    <>
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
                <input type="button" />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
