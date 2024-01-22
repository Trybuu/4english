import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function EnglishLearningPage() {
  const [word, setWord] = useState()

  useEffect(() => {
    axios
      .get('https://random-word-api.herokuapp.com/word')
      .then((response) => setWord(response.data))
  }, [])

  return (
    <>
      <NavLink to="..">Back to welcome page</NavLink>
      <h1>Word for today</h1>
      <h2>{word ? word : 'Loading...'}</h2>
    </>
  )
}

export default EnglishLearningPage
