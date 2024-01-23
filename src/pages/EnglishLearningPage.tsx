import { NavLink } from 'react-router-dom'
import RandomWord from '../components/RandomWord/RandomWord'
import SearchWord from '../components/SearchWord/SearchWord'

function EnglishLearningPage() {
  return (
    <>
      <NavLink to="..">Back to welcome page</NavLink>
      <RandomWord />
      <SearchWord />
    </>
  )
}

export default EnglishLearningPage
