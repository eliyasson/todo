import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
 

function App() {
  // state hook - 'useState
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // helper function
  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]); //add a player to the list
    setNewItem(""); // clear input box
  }

  useEffect(() => {
    if (newItem === '') {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [newItem]);

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Add Player List App</h1>
      <AddTodo newItem={newItem} setNewItem={setNewItem} isButtonDisabled={isButtonDisabled} addItem={addItem} />
      <TodoList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
