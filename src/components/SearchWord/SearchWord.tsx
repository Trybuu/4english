import classes from './SearchWord.module.scss'

export default function SearchWord() {
  return (
    <section className={classes['section-wrapper']}>
      <form className={classes['form']}>
        <input type="text" placeholder="Search word" />
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
