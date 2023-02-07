import "./Hero.css";
import React from "react";
import heroImg from "../images/illustration-intro.png";

const Hero = () => {
  return (
    <div className="hero">
      <img className="heroImg" src={heroImg} alt="heroImg"></img>
      <div className="hero-info">
        <h2 className="secondary-heading">
          All your files in one secure location, accessible anywhere.
        </h2>
        <p className="text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers Get Started
        </p>
        <a href="#h" className="hero-btn">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
