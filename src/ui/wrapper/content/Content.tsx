import classes from './Content.module.scss'

interface ContentProps {
  children: React.ReactNode
}

export default function Content({ children }: ContentProps) {
  return <div className={classes['content']}>{children}</div>
}
