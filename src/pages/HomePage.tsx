import { NavLink } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <NavLink to="/app">Go to app</NavLink>
    </>
  )
}

export default HomePage
