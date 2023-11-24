import React from "react";
import Circle from "./Circle";

type CircleGroupProps = {
  filledQnt: number;
};

const CircleGroup: React.FC<CircleGroupProps> = ({ filledQnt }) => {
  const circles = [];
  for (let i = 0; i < 6; i++) {
    if (i < filledQnt) {
      circles.push(<Circle key={i} isFill={true} />);
    } else {
      circles.push(<Circle key={i} isFill={false} />);
    }
  }
  return <div className="circleGroup">{circles}</div>;
};

export default CircleGroup;
