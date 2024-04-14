import React from "react";
import "./Landing.css";
import person from "../../assets/Doctor.jpg";

const Landing = () => {
  return (
    <section className="landing-container">
      <div className="landing-left">
        <div className="image-container">
          <img className="doctor" src={person} alt="Doctor" />
        </div>
      </div>
      <div className="landing-right">
        <h1 className="landing-speech-title"> Parkinson's Speech Treatment</h1>
        <h2 className="landing-title">
          Your path to <span className="italic">better{" "}</span>
            <span className="title-color">communication!</span>
        </h2>
        <p className="landing-info">
          {" "}
          Research shows prophylactic exercises can improve vocal loudness,
          articulation, and enhance speech intelligibility resulting in more
          effective communication and a better quality of life!
        </p>
        <button className="landing-button">
            Get Started
        </button>
          {/* <div className="bottom-container">
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
          </div> */}
        </div>
    </section>
  );
};

export default Landing;
