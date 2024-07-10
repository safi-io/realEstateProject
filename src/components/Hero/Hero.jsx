import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-wrapper" id="hero">
      <div className="flexCenter paddings innerWidth hero-container">
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "3rem", opacity: 0 }}
              animate={{ y: 0, opacity: "1" }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>

          <div className="hero-des">
            <p className="secondaryText">
              Find a variety of properties that suit you very easily
              <br /> Forget all difficulties in finding a residence for you
            </p>
          </div>

          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="stat flexColCenter">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: "1" }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src="./hero-image.png" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
