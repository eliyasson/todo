import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // state hook - 'useState
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // helper function
  function addItem() {
    if(!newItem) {
      alert("Enter a player name.")
    }

    

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]); //add a player to the list
    setNewItem("") // clear input box
  }
  useEffect(() => {
      if (newItem === '') {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
    }, [newItem]);

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);

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
      <button disabled={isButtonDisabled} onClick={() => addItem()}>Add</button>

      {/*3. List of players (unordered list with list players)*/}
      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button className='delete-button' onClick = {() => deleteItem(item.id)}>❌</button></li>
          )
        })}
      </ul>
      
    </div>
  );
}

export default App;
