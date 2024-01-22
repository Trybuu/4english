import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/Navigation/MainNavigation'

function HomeLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

export default HomeLayout
