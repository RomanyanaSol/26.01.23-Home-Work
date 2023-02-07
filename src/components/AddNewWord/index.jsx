import React from 'react'
import s from './style.module.css';


export default function AddNewWord({ addWord }) {

    const onSubmit = event => {
        event.preventDefault();
        const { word, translate } = event.target;

        addWord(word.value, translate.value);
        word.value = '';
        translate.value = '';
    }

   

    return (
        <form className={s.addForm} onSubmit={onSubmit} >
            <input type="text" name='word' placeholder='слово' />
            <input type="text" name='translate' placeholder='перевод' />
            <button>Добавить</button>
        </form>
    )
}
