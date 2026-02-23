import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section flex items-center overflow-hidden relative text-white">
      <div className="container relative text-center">


        <div className="badge-circle badge-left">
          <h4>500+</h4>
          <p>Courses</p>
        </div>


        <div className="badge-pill badge-right">
          <strong>10K+</strong> <br />
          Happy kids
        </div>


        <div className="badge-pill rating-badge">
          ⭐ 4.9 Rating
        </div>


        <h2 className="hero-title font-normal"
          style={{ fontFamily: "'Comic Neue', cursive" }}>
          Learn a New Skill <br />
          <span>Everyday, Anytime, and Anywhere.</span>
        </h2>

        <div className="flex search-box mx-auto">
          <input
            type="text"
            placeholder="What do you want to learn today?"
          />
          <button type="button" className="button">Search</button>
        </div>

        <img
          src="/left-kid.png"
          alt="Kid"
          className="kid-left"
        />


        <div className="kid-right">
          <img
            src="/right-kid.png"
            alt="Kid"
          />
        </div>


      </div>
    </section>
  );
}