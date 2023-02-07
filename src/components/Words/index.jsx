import React from 'react'
import s from './style.module.css';

export default function Words({ id, delete_word, turn, change, color, generateColor }) {


  
  const style = {
    backgroundColor: color
  }

  return (
    <div className={s.card} generateColor={generateColor} style={style}>
      <div className={s.button} onClick={() => delete_word(id)}></div>
      <p onClick={() => turn(id)}>{change(id)}</p>

    </div>
  )
}

