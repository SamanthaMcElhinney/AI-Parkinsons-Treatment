import React from "react";
import "./Landing.css";
import phone from "./assets/phone.png"
import clarity from "./assets/clarity.png"
import peeps from "./assets/peeps.png"
import person from "./assets/doctor.png"

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="top-content">
        <div className="content-right">
          <div className="image-container">
            <img className="doctor" src={person} />
          </div>
        </div>
        <div className="content-left">
          <h1 className="title">
            Your path to better{" "}
            <span className="title-color">communication!</span>
          </h1>
          <h3 className="landing-info">
            Research shows prophylactic exercises can improve vocal loudness,
            articulation, and enhance speech intelligibility resulting in more
            effective communication and a better quality of life!
          </h3>
          <div className="bottom-container">
            <div className="icon-container">
              <img className="icon" src={phone} alt="phone" />
              <h3 className="icon-label">Be understood</h3>
            </div>
            <div className="icon-container">
              <img className="icon" src={clarity} />
              <h3 className="icon-label">Get Clarity</h3>
            </div>
            <div className="icon-container">
              <img className="icon" src={peeps} alt="people" />
              <h3 className="icon-label">Move Forward</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bottom-container">
        <div className="icon-container">
          <img className="icon" src={phone} alt="phone" />
          <h3>Be understood</h3>
        </div>
        <div className="icon-container">
          <img className="icon" src={clarity} />
          <h3>Get Clarity</h3>
        </div>
        <div className="icon-container">
          <img className="icon" src={peeps} alt="people" />
          <h3>Move Forward</h3>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
