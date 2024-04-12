import React from "react";
import "./Landing.css";
import phone from "../../assets/phone.png";
import clarity from "../../assets/clarity.png";
import peeps from "../../assets/peeps.png";
import person from "../../assets/doctor.png";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="top-content">
        <div className="content-right">
          <div className="image-container">
            <img className="doctor" src={person} alt="Doctor" />
          </div>
        </div>
        <div className="content-left">
          <h2 className="title">
            Your path to better{" "}
            <span className="title-color">communication!</span>
          </h2>
          <p className="landing-info">
            {" "}
            Research shows prophylactic exercises can improve vocal loudness,
            articulation, and enhance speech intelligibility resulting in more
            effective communication and a better quality of life!
          </p>
          <div className="bottom-container">
            <div className="icon-container">
              <img className="icon" src={phone} alt="Phone" />
              <h3 className="icon-label">Be understood</h3>
            </div>
            <div className="icon-container">
              <img className="icon" src={clarity} alt="Clarity" />
              <h3 className="icon-label">Get Clarity</h3>
            </div>
            <div className="icon-container">
              <img className="icon" src={peeps} alt="People" />
              <h3 className="icon-label">Move Forward</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
