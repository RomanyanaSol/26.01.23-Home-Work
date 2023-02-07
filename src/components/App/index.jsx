import { useEffect, useState } from "react";
import AddNewWord from "../AddNewWord";
import Search from "../Search";
import Words from "../Words";
import s from './style.module.css';




function App() {

  // const default_words = [
  //   { id: 1, word: 'слово 1' },
  //   { id: 2, word: 'слово 2' },
  //   { id: 3, word: 'слово 3' },
  //   { id: 4, word: 'слово 4' },
  //   { id: 5, word: 'слово 5' },
  // ];


  const [words, setWords] = useState(() => JSON.parse(localStorage.getItem('words')) ?? []);

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);



  const addWord = (word, translate) => {
    const newWord = {
      id: Date.now(),
      word: word,
      translate: translate,
      turnCard: true,
      show: true,
      color: generateColor()
    };

    setWords(pre => [...pre, newWord])
  }

  function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }

  const turn = (_id) => {
    const target = words.find(({ id }) => id === _id);
    target.turnCard = !target.turnCard;
    setWords([...words])
  }

  const change = (_id) => {
    const target = words.find(({ id }) => id === _id);
    if (target.turnCard === true) {
      return target.word
    } else {
      return target.translate
    }
  }

  const delete_word = (delId) => setWords(words.filter(word => word.id !== delId));


  const find = (string) => {
    string = string.toLowerCase();
    const new_search = words.map(word => {
      word.show = word.word.toLowerCase().startsWith(string) || word.translate.toLowerCase().startsWith(string);
      return word

    })
    setWords(new_search)
  }



  return (
    <div>
      <div className={s.container}>
        <AddNewWord addWord={addWord}  />
        <Search find={find} />
      </div>
      <div className={s.card}>
        {
          words
          .filter(({show}) => show)
          .map((word) => <Words key={word.id} {...word} delete_word={delete_word} turn={turn} change={change} generateColor={generateColor} />)
        }
      </div>
    </div>
  );
}

export default App;
