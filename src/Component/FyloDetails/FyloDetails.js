import "./FyloDetails.css";
import React from "react";
import collaboration from "../images/icon-collaboration.svg";
import security from "../images/icon-security.svg";
import store from "../images/icon-any-file.svg";
import access from "../images/icon-access-anywhere.svg";

const FyloDetails = () => {
  return (
    <section>
      <div className="detail">
        <div className="detail-item">
          <img src={access} className="detail-img" alt="access"></img>
          <h2 className="detail-heading">Access your files, anywhere</h2>
          <p className="detail-text">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="detail-item">
          <img src={security} className="detail-img" alt="security"></img>
          <h2 className="detail-heading">Security you can trust</h2>
          <p className="detail-text">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </div>
      <div className="detail">
        <div className="detail-item fix">
          <img src={store} className="detail-img" alt="store"></img>
          <h2 className="detail-heading">Real time Collaoration</h2>
          <p className="detail-text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="detail-item">
          <img
            src={collaboration}
            className="detail-img"
            alt="collaboration"
          ></img>
          <h2 className="detail-heading">Store any type of file</h2>
          <p className="detail-text">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared
          </p>
        </div>
      </div>
    </section>
  );
};

export default FyloDetails;
