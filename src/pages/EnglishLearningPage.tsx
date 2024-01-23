import { NavLink } from 'react-router-dom'
import RandomWord from '../components/RandomWord/RandomWord'
import SearchWord from '../components/SearchWord/SearchWord'
import WordDetails from '../components/WordDetails/WordDetails'

function EnglishLearningPage() {
  return (
    <>
      <NavLink to="..">Back to welcome page</NavLink>
      <RandomWord />
      <SearchWord />
      <WordDetails />
    </>
  )
}

export default EnglishLearningPage
