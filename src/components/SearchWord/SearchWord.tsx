import { useDispatch } from 'react-redux'
import { increment } from '../../features/word/wordSlice'
import { useRef } from 'react'

import classes from './SearchWord.module.scss'

export default function SearchWord() {
  const dispatch = useDispatch()

  const searchInput = useRef<HTMLInputElement>(null)

  function handleSearchWord(e: React.FormEvent) {
    e.preventDefault()

    dispatch(increment({ word: searchInput.current?.value ?? '' }))
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
