import React, { useState } from 'react';
const defaultList = [
  { id: 1, name: 'test1', done: true },
  { id: 2, name: 'test2', done: false },
  { id: 3, name: 'test3', done: true },
];
export default function Todo() {
  const [lists, setLists] = useState(defaultList);
  const [name, setName] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name != '') {
      let new_item = { id: lists.length + 1, name: name, done: false };

      setLists([...lists, new_item]);
      setName('');
    }
  };

  const handleRemove = (id) => {
    let new_list = lists.filter(function (list) {
      return list.id !== id;
    });
    setLists(new_list);
  };
  return (
    <div>
      <p>test</p>
      <input type="text" onChange={handleChange} value={name} />
      <input type="button" onClick={handleClick} value="Add" />
      {lists.map((list) => (
        <div>
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
