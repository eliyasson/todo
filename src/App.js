import React, { useState } from 'react';
import './App.css';

function App() {
  // state hook - 'useState
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // helper function
  function addItem() {
    if(!newItem) {
      alert("Enter a player name.")
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("")
    console.log(items);
  }

  return (
    <div className="App">
      {/*1. Header */}
      <h1>Todo List App</h1>

      {/*2.Input (input and button)*/} 
      <input
        type="text"
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>

      {/*3. List of players (unordered list with list players)*/}
      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value}</li>
          )
        })}
      </ul>
      
    </div>
  );
}

export default App;
