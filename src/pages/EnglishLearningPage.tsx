import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function EnglishLearningPage() {
  const [word, setWord] = useState('Fetching word from the server...')

  useEffect(() => {
    axios
      .get('https://random-word-api.herokuapp.com/word')
      .then((response) => setWord(response.data))
  }, [])

  if (!word) {
    return <p>Can't get word from server</p>
  }

  return (
    <>
      <NavLink to="..">Back to welcome page</NavLink>
      <h1>Word for today</h1>
      <h2>{word}</h2>
    </>
  )
}

export default EnglishLearningPage
