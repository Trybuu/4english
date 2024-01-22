import { NavLink } from 'react-router-dom'
import RandomWord from '../components/RandomWord/RandomWord'

function EnglishLearningPage() {
  return (
    <>
      <NavLink to="..">Back to welcome page</NavLink>
      <RandomWord />
    </>
  )
}

export default EnglishLearningPage
