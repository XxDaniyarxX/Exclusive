import React from 'react'

export default function Green({ changeColor }) {
  return (
    <div>
      <button onClick={() => changeColor('green')}>Green</button>
    </div>
  )
}


