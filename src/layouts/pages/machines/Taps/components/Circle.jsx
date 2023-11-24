import style from './Circle.module.css'

export function Circle ({isFill}) {
    const circleStyle = isFill ? style.circleFilled : style.circle

  return <div className={circleStyle}>

  </div>
}