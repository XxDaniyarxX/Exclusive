import React from 'react'

export default function Pink({ changeColor }) {
  return (
    <div>
      <button onClick={() => changeColor('pink')}>Pink</button>
    </div>
  )
}


