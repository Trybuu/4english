import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/Navigation/MainNavigation'
import Wrapper from '../ui/wrapper/Wrapper'
import Content from '../ui/wrapper/content/Content'

function AppLayout() {
  return (
    <Wrapper>
      <MainNavigation />
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  )
}

export default AppLayout
