import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.scss'
import Wrapper from '../ui/wrapper/Wrapper'

export default function MainNavigation() {
  return (
    <Wrapper>
      <nav className={classes['nav']}>
        <ul className={classes['nav__items']}>
          <li className={classes['nav__item']}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={classes['nav__item']}>
            <NavLink to="/app">English</NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}
