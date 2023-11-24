import { Circle } from "./Circle"

export function CircleGroup ({filledQnt}) {
    const circles = []
    for (let i = 0; i < 6; i++) {
        if (i < filledQnt) {
        circles.push(<Circle key={i} isFill={true} />)
        } else {
        circles.push(<Circle key={i} isFill={false} />)
        }
    }
    return <div className="circleGroup">
        {circles}
    </div>
}