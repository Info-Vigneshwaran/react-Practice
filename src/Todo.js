import React, { useState, useEffect } from 'react';
import data from './data';

export default function Todo() {
  const [lists, setLists] = useState(data);
  const [name, setName] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  useEffect(() => {}, [lists]);
  const handleDone = (id) => {
    let new_list = lists.map((list) => {
      return list.id == id ? { ...list, done: !list.done } : { ...list };
    });
    setLists(new_list);
  };
  const handleClick = () => {
    if (name != '') {
      let new_item = { id: lists.length + 1, name: name, done: false };

      setLists([...lists, new_item]);
      setName('');
    }
  };

  const handleRemove = (id) => {
    let new_list = lists.filter((list) => {
      return list.id !== id;
    });
    setLists(new_list);
  };

  return (
    <div>
      <p>test</p>
      <input type="text" onChange={handleChange} value={name} />
      <input type="button" onClick={handleClick} value="Add" />
      {lists.map((list, index) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={() => handleDone(list.id)}
            defaultChecked={list.done}
          />
          {list.name}

          <input
            type="button"
            onClick={() => handleRemove(list.id)}
            value="remove"
          />
        </div>
      ))}
    </div>
  );
}
