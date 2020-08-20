import React from "react";
import "./message-box.css";

export default function MessageBox() {
  return (
    <div className="wrapper-message-box">
      <p>Tell us how we can improve</p>
      <textarea placeholder="Write your message here"></textarea>
    </div>
  );
}
