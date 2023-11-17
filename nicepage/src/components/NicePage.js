import CommercialContractorIcon from "../assets/commercial-contractor-icon.svg";
import ConstructionWorkerIcon from "../assets/construction-worker.svg";
import EducatorIcon from "../assets/educator-icon.svg";
import FactoryIcon from "../assets/factory-icon.svg";
import GearWheelIcon from "../assets/gear-wheel-icon.svg";
import GovernmentContractorIcon from "../assets/government-contractor-icon.svg";
import HardHatWorkerIcon from "../assets/hardhat-worker-icon.svg";
import Hero from "../assets/business-building.jpeg";
import HomeownerIcon from "../assets/homeowner-icon.svg";
import React from "react";
import RestaurantIcon from "../assets/restaurant-icon.svg";
import WorldMap from "../assets/map.png";

function NicePage() {
  return (
    <main>
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
            <figure>
              <img src={Hero} alt="Business Building" />
            </figure>
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
              <h2 className="primary-heading">Construction Machinery Co.</h2>
              <h3 className="small-heading">We have a proud tradition of service as a General Contractor since 1974</h3>
              <p>We headquartered in San Diego, brings over 42 years of local and national construction experience; with a reputation for delivering large and unique design-build projects ahead of schedule and on budget. Our company has served clients and building owners for over four decades.</p>
              <a className="btn cta-btn" href="https://www.google.com" target="_blank" rel="noreferrer">
                Read More
              </a>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </section>
      <section className="certifications">
        <div className="inner-container flex flex-column large-gap">
          <div className="certifications-description flex flex-column small-gap">
            <h2 className="small-heading">What we do</h2>
            <h3 className="secondary-heading">Company Certifications</h3>
            <p className="body-font light-font">
              Our company offers a variety of services to meet your project’s needs, to take you from collaboration meetings all the way to ribbon-cutting and beyond. We believe that every project is unique, and can customize our approach to fit your particular project.
            </p>
          </div>
          <div className="three-columns flex flex-column flex-mobile-row-641 small-gap">
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <figure>
                <img src={HardHatWorkerIcon} alt="Hardhat Worker Icon" width="64" height="64" />
              </figure>
              <h4 className="tertiary-heading">Healthcare Building</h4>
              <p className="body-font light-font">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <figure>
                <img src={EducatorIcon} alt="Educator Icon" width="64" height="64" />
              </figure>
              <h4 className="tertiary-heading">Education Building</h4>
              <p className="body-font light-font">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <figure>
                <img src={GovernmentContractorIcon} alt="Government Contractor Icon" width="64" height="64" />
              </figure>
              <h4 className="tertiary-heading">Government Building</h4>
              <p className="body-font light-font">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <figure>
                <img src={CommercialContractorIcon} alt="Commercial Contractor Icon" width="64" height="64" />
              </figure>
              <h4 className="tertiary-heading">Commercial Building</h4>
              <p className="body-font light-font">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <figure>
                <img src={HomeownerIcon} alt="Homeowner Icon" width="64" height="64" />
              </figure>
              <h4 className="tertiary-heading">Residential Building</h4>
              <p className="body-font light-font">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <figure>
                <img src={RestaurantIcon} alt="Restaurant Icon" width="64" height="64" />
              </figure>
              <h4 className="tertiary-heading">Restaurant Facilities</h4>
              <p className="body-font light-font">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </section>
      <section className="advantages">
        <div className="inner-container no-padding flex flex-column flex-mobile-row-641">
          <div className="left-col flex flex-column flex-align-center flex-justify-center">
            <div className="inner-left-col-wrapper flex flex-column flex-align-center flex-justify-center x-small-gap">
              <figure>
                <img src={ConstructionWorkerIcon} alt="Construction Worker Icon" width="64" height="64" />
              </figure>
              <h2 className="small-heading">Healthcare Building</h2>
              <p className="body-font">Tiling is an effective way to add elegance & style to any bath or kitchen Yellow Hats Remodeling Team specializes in tile installation and works directly with each.</p>
              <a className="btn cta-btn" href="https://www.google.com" target="_blank" rel="noreferrer">
                Read More
              </a>
            </div>
          </div>
          <div className="middle-col"></div>
          <div className="right-col flex flex-column flex-align-center flex-justify-center">
            <div className="inner-right-col-wrapper flex flex-column flex-align-center flex-justify-center x-small-gap">
              <div className="inner-right-icon-box">
                <figure>
                  <img src={FactoryIcon} alt="Factory Icon" width="64" height="64" />
                </figure>
                <h2 className="small-heading">Education Building</h2>
              </div>
              <div className="inner-right-icon-box">
                <figure>
                  <img src={GearWheelIcon} alt="Gearwheel Icon with Wrench" width="64" height="64" />
                </figure>
                <h2 className="small-heading">Government Building</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="inner-container no-padding">
          <div className="portfolio-heading">
            <h2 className="small-heading light-font">Portfolio</h2>
            <h3 className="tertiary-heading light-font">Recent Projects</h3>
          </div>
        </div>
        <div className="portfolio-gallery flex flex-column">
          <div className="portfolio-gallery-items portfolio-gallery-item-1"></div>
          <div className="portfolio-gallery-items portfolio-gallery-item-2"></div>
          <div className="portfolio-gallery-items portfolio-gallery-item-3"></div>
          <div className="portfolio-gallery-items portfolio-gallery-item-4"></div>
          <div className="portfolio-gallery-items portfolio-gallery-item-5"></div>
          <div className="portfolio-gallery-items portfolio-gallery-item-6"></div>
          <div className="portfolio-gallery-items portfolio-gallery-item-7"></div>
          <div className="portfolio-gallery-items portfolio-gallery-item-8"></div>
        </div>
      </section>
      <section className="team">
        <div className="inner-container max-width flex flex-column">
          <div className="image-left-content-right flex flex-column">
            <div className="image flex flex-column">
              <figure>
                <img src={WorldMap} alt="World Map" />
              </figure>
            </div>
            <div className="content flex flex-column">
              <h2 className="small-heading">Elvo Construction</h2>
              <h3 className="tertiary-heading">The Best World Team</h3>
              <p className="body-font">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus
                sem.
              </p>
              <a className="btn cta-btn" href="https://www.google.com" target="_blank" rel="noreferrer">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="inner-container flex flex-column max-width">
          <div className="top-half-footer flex flex-column large-gap light-font">
            <div className="top-left-half-footer flex flex-column">
              <p className="footer-text">Contact us today to plan your boat’s maintenance or repair procedure.</p>
              <p className="address">
                4262 Richison Drive,
                <br />
                Missoula, MT 59801
              </p>
            </div>
            <div className="top-right-half-footer flex flex-column flex-align-center">
              <h3 className="tertiary-heading">Contact Us</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Freephone:</td>
                    <td>+1 800 559 6580</td>
                  </tr>
                  <tr>
                    <td>Telephone:</td>
                    <td>+1 800 603 6035</td>
                  </tr>
                  <tr>
                    <td>Fax:</td>
                    <td>+1 800 889 9898</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="footer-signature light-font">
          <p className="site-signature">
            <a href="https://nicepage.com/website-templates" target="_blank" rel="noreferrer">
              Website Templates
            </a>{" "}
            created with{" "}
            <a href="https://nicepage.com" target="_blank" rel="noreferrer">
              Website Builder Software
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}

export default NicePage;
