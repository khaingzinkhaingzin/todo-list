import React from 'react'

const InputForm = ({ list, changeListValue, addToLists }) => {
  return (
    <div className="input-form">
        <input 
            type="text"
            value={list}
            onChange={(event) => changeListValue(event.target.value)} 
        />
        <button onClick={(event) => addToLists(event.target.value)}>Add</button>
    </div>
  )
}

export default InputForm