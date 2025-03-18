import React, { useState } from 'react';
import './App.css';  // Import the CSS file

const HelloWorld = () => {
  return <h1 className="hello-world">Hello, World!</h1>;
};

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button className="btn" onClick={handleClick}>Click Me</button>
      <p>You clicked {count} times</p>
    </div>
  );
};

const ItemList = () => {
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <div className="item-list">
      <h2>Fruit List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const UserForm = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="user-form">
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="input"
      />
      <p>Your name is: <span className="name">{name}</span></p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <HelloWorld />
      <ClickCounter />
      <ItemList />
      <UserForm />
    </div>
  );
};

export default App;
