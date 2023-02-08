import "./Email.css";

import React from "react";

const Email = () => {
  return (
    <div className="email">
      <h1 className="email-heading">Get early access today</h1>
      <p className="email-text">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <span className="input-section">
        <input type="email" placeholder="enter email"></input>
        <a href="#2">Get Started For Free</a>
      </span>
    </div>
  );
};

export default Email;
