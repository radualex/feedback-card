import React from "react";
import "./feedback-card.css";

import MessageBox from "../message-box/message-box";
import Mood from "../mood/mood";

export default function Card() {
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
            <Mood sentiment="sentiment_very_dissatisfied" />
            <Mood sentiment="sentiment_satisfied" />
            <Mood sentiment="sentiment_very_satisfied" />
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
