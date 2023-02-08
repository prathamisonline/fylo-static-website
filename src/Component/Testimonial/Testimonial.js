import "./Testimonial.css";
import React from "react";
import img1 from "../images/profile-1.jpg";
import img2 from "../images/profile-2.jpg";
import img3 from "../images/profile-3.jpg";

const Testimonial = () => {
  return (
    <section>
      <div className="testimonial">
        <div className="testimonial-item">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img className="testimonial-img" src={img1} alt="profile1"></img>
            <span className="profile-detail">
              <h3>Satish Patel</h3>
              <p>Founder & CEO,Huddle</p>
            </span>
          </div>
        </div>
        <div className="testimonial-item">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img className="testimonial-img" src={img2} alt="profile1"></img>
            <span className="profile-detail">
              <h3>Bruce Mckenzie</h3>
              <p>Founder & CEO,Huddle</p>
            </span>
          </div>
        </div>
        <div className="testimonial-item">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="profile">
            <img className="testimonial-img" src={img3} alt="profile1"></img>
            <span className="profile-detail">
              <h3>Iva Boyd</h3>
              <p>Founder & CEO,Huddle</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
