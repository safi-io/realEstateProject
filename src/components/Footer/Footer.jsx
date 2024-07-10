import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="f-wrapper" id="footer">
      <div className="f-container innerWidth paddings flexCenter">
        <div className="left-side flexColStart">
          <img src="./logo2.png" alt="footerLogo" width={120} />
          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>
        <div className="right-side flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="f-menu flexCenter">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
