import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import getRandomWord, { Word } from '../helpers/getRandomWord'

function EnglishLearningPage() {
  const [word, setWord] = useState<Word[] | null>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const word = await getRandomWord()
        setWord(word)
        setIsLoading(false)
      } catch (error) {
        console.error(`Can not fetch word from the server: ${error}`)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <NavLink to="..">Back to welcome page</NavLink>
      <h1>
        Word for
        <br /> today
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <h2>{word ? word[0].word : 'Unable to fetch word'}</h2>
      )}
    </>
  )
}

export default EnglishLearningPage
