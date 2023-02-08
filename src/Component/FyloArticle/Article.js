import "./Article.css";

import React from "react";
import img from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";

const Article = () => {
  return (
    <section>
      <div className="article">
        <div className="article-part-1">
          <img className="article-img" src={img} alt="article-img"></img>
        </div>
        <div className="article-part-2">
          <h2 className="article-heading">Stay Productive wherever you are</h2>
          <p className="article-text">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="article-text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <span className="article-span article-display">
            <a className="article-link" href="#1">
              See how Fylo works
            </a>
            <img className="arrow" src={arrow} alt="arrow"></img>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Article;
