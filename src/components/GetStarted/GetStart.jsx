import React from "react";
import "./GetStart.css";

export default function GetStart() {
  return (
    <section className="g-wrapper" id='getStart'>
      <div className="g-container paddings innerWidth flexCenter">
        <div className="innerContainer flexColCenter">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">Subscribe and find super attractive price quotes from us.<br/>
          Find your residence soon</span>
          <button className="button">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
