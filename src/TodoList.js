import React, { useState, useEffect, } from 'react';

function TodoList({items, deleteItem}) {
    return (
      <ol>
        {items.map(item => {
          return(
            <li key={item.id}>
              {item.value}
              <button className='delete-button' onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </li>
          )
        })}
      </ol>
    );
  }
  export default TodoList;