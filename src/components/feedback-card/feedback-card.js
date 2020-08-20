import React from "react";
import "./feedback-card.css";

import MessageBox from "../message-box/message-box";

export default function Card() {
  return (
    <div className="wrapper-card">
      <p className="question-card">
        How likely are you to answer to this question?
      </p>
      <MessageBox />
    </div>
  );
}
