import React from "react";
import "./mood.css";

export default function Mood(props) {
  let _handleOnClick = () => {
    if (props.onClick) {
      props.onClick(props.index);
    }
  };
  return (
    <div
      className={`wrapper-mood ${props.active ? "box-shadow-mood" : ""}`}
      onClick={_handleOnClick}
    >
      <span className="material-icons">{props.sentiment}</span>
    </div>
  );
}
