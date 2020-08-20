import React from "react";
import "./mood.css";

export default function Mood(props) {
  return (
    <div className="wrapper-mood">
      <span className="material-icons">{props.sentiment}</span>
    </div>
  );
}
