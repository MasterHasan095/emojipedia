import React from 'react'

function Emoji(props) {
  return (
    <div className='term'>
      <h1 className='emoji'>{props.emoji}</h1>
      <dt>{props.name}</dt>
      <dd>{props.meaning}</dd>
    </div>
  )
}

export default Emoji
