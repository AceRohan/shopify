import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  // For dark mode, you can toggle the class 'dark' dynamically or with a library.
  // Here I'll just show without dark mode toggling.
  return (
    <div
      data-aos="zoom-in"
      className="subscribe-container"
    >
      <div className="container_inputBox">
        <div className="subscribe-content">
          <h1>
            Get Notified About New Products
          </h1>
          <input
          className="input_box_email"
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
