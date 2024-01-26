import { useEffect, useState } from 'react'
import getRandomWord, { Word } from '../../helpers/getRandomWord'

import classes from './RandomWord.module.scss'
import LoadingEffect from '../../ui/loadingEffect/LoadingEffect'

export default function RandomWord() {
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
    <section className={classes['random-word-wrapper']}>
      <h2>Random word</h2>

      {isLoading ? (
        <h3>
          <LoadingEffect />
        </h3>
      ) : (
        <h3>{word ? word[0].word : 'Unable to fetch word'}</h3>
      )}
    </section>
  )
}
