import React from "react";
import right_image from "../../assets/airbnb-hero_right.webp";
import "./Hero.css";
import { FiArrowRight } from "react-icons/fi";
const Hero = () => {
  return (
    <div className="parent">
      <div className="left">
        <span className="first">#Ai powered Airbnb clone App</span>
        <div className="hero-title">
          <h1>
            Launch Your <br />
            <span>Vacation Rental</span> <br />
            App in Just 7 Days
          </h1>
        </div>
        <hr></hr>
        <div className="hero-desc">
          <p>
            Launch your own vacation rental platform with AI-powered features.
            Enable easy bookings, personalized stay suggestions, smart pricing,
            and simple property management—all in one easy-to-use solution..
          </p>
        </div>
        <div className="btn">
          <button>
            <span className="icon">
              <FiArrowRight />
            </span>
            View Live Demo
          </button>
        </div>
      </div>
      <div className="right">
        <img src={right_image}></img>
      </div>
    </div>
  );
};
export default Hero;
