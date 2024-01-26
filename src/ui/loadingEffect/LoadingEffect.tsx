import classes from './LoadingEffect.module.scss'

export default function LoadingEffect() {
  return (
    <div className={classes['loading-circle']}>
      <div className={classes['loading-circle__outer']}>
        <div className={classes['loading-circle__inner']}>
          <div className={classes['loading-circle__point']}></div>
        </div>
      </div>
    </div>
  )
}
