import React from "react";
import hero from "../assets/business-building.jpeg";

function NicePage() {
  return (
    <div className="page-wrapper">
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
      <section className="about">
        <div className="inner-container max-width flex flex-column">
          <div className="image-right-content-left flex flex-column flex-mobile-row-641">
            <div className="content flex flex-column">
              <h2 className="about-heading">Construction Machinery Co.</h2>
              <h3 className="subhead">We have a proud tradition of service as a General Contractor since 1974</h3>
              <p>We headquartered in San Diego, brings over 42 years of local and national construction experience; with a reputation for delivering large and unique design-build projects ahead of schedule and on budget.  Our company has served clients and building owners for over four decades.</p>
              <a className="btn cta-btn" href="https://www.google.com" target="_blank" rel="noreferrer">
              Read More
            </a>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NicePage;
