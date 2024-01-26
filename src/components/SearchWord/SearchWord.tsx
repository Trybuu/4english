import { useDispatch } from 'react-redux'
import { setWord } from '../../features/word/wordSlice'
import { useRef } from 'react'

import classes from './SearchWord.module.scss'
import axios from 'axios'

export default function SearchWord() {
  const dispatch = useDispatch()

  const searchInput = useRef<HTMLInputElement>(null)

  async function handleSearchWord(e: React.FormEvent) {
    try {
      e.preventDefault()

      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${
          searchInput.current?.value ?? ''
        }`,
      )

      dispatch(setWord(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={classes['section-wrapper']}>
      <form className={classes['form']} onSubmit={handleSearchWord}>
        <input ref={searchInput} type="text" placeholder="Search word" />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
