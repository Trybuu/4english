import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import Wrapper from '../ui/wrapper/Wrapper'

function AppLayout() {
  return (
    <Wrapper>
      <MainNavigation />
      <Outlet />
    </Wrapper>
  )
}

export default AppLayout
