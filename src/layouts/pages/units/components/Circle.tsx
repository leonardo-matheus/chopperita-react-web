import React from "react";
import style from "./Circle.module.css";

type CircleProps = {
  isFill: boolean;
};

const Circle: React.FC<CircleProps> = ({ isFill }) => {
  const circleStyle = isFill ? style.circleFilled : style.circle;

  return <div className={circleStyle}></div>;
};

export default Circle;
