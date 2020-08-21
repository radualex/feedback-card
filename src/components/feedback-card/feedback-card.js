import React, { useState } from "react";
import "./feedback-card.css";

import MessageBox from "../message-box/message-box";
import Mood from "../mood/mood";

let moods = [
  "sentiment_very_dissatisfied",
  "sentiment_satisfied",
  "sentiment_very_satisfied"
];

export default function Card() {
  const [active, setActive] = useState(-1);

  let _handleOnClickSentiment = (index) => {
    setActive(index);
  };

  return (
    <div className="wrapper-card">
      <div className="header-card">
        <span class="material-icons">close</span>
      </div>
      <div className="content-card">
        <div className="top-content-wrapper">
          <p className="question-card">
            How likely are you to answer to this question?
          </p>
          <div className="sentiment-wrapper">
            {moods.map((mood, index) => (
              <Mood
                index={index}
                sentiment={mood}
                active={active === index}
                onClick={_handleOnClickSentiment}
              />
            ))}
          </div>
        </div>
        <MessageBox />
        <div className="footer-wrapper">
          <span>Skip</span>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
