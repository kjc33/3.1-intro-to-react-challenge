import React from "react";
import hero from "../assets/BusinessBuilding.jpeg";
// import HeroHeadshot from "../assets/HeroHeadshot.jpeg";

function NicePage() {
  return (
    <>
      <section className="page-name">
        <div className="inner-container max-width flex flex-column flex-justify-center flex-align-center">
          <div className="main-heading">
            <h1>Business and Industrial Parks</h1>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="inner-container max-width no-padding">
          <div className="hero-bg">
            <img src={hero} alt="Business Building" />
          </div>
        </div>
      </section>
      <section className="hero-cards">
        <div className="inner-container flex flex-column flex-mobile-row-641">
          <div className="hero-headshot"></div>
          <div className="hero-value-proposition">
            <p>We have several business and industrial parks with available space for your business</p>
            <a className="btn cta-btn" href="https://www.google.com" target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default NicePage;
