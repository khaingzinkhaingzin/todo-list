import React, { useState } from 'react'
import InputForm from './InputForm'
import List from './List'
import "./styles.css"

const App = () => {
  const [list, setList] = useState('');
  const [lists, setLists] = useState([]);

  function changeListValue(value) {
    setList(value);
  }

  function addToLists() {
    setLists([...lists, list]);
    setList('');
  }

  return (
    <div className="app">
      <h1>Todo List</h1>
      <InputForm 
        list={list} 
        changeListValue={changeListValue}
        addToLists={addToLists}
      />
      <List lists={lists}  />
    </div>
  )
}

export default App