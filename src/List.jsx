import React from 'react'

const List = ({ lists }) => {
  return (
    <div className="list">
        <ul>
            {lists.map((list, index) => (
                <li key={index}>
                    {list}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List