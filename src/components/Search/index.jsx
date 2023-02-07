import React from 'react'
import s from './style.module.css';

export default function Search({find}) {

    const onChange = event => {
        find(event.target.value);
        
    }

  return (
    <div className={s.search_container}>
        <input type="text" name='word' placeholder='найти' onChange={onChange}
         />
    </div>
  )
}
