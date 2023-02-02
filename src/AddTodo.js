import React, { useState, useEffect} from 'react';

function AddTodo({newItem, setNewItem, isButtonDisabled, addItem}) {
    return (
      <div className='btn'>
        <input
          type="text"
          placeholder='Add player'
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <button disabled={isButtonDisabled} onClick={addItem}>Add Player</button>
      </div>
    );
  }
  export default AddTodo;