import About from "./About";
import AdvantagesDesc from "./AdvantagesDesc";
import AdvantagesIcons from "./AdvantagesIcons";
import CertsDesc from "./CertsDesc";
import CertsIcons from "./CertsIcons";
import CtaBtn from "./CtaBtn";
import CommercialContractorIcon from "../assets/commercial-contractor-icon.svg";
import ConstructionWorkerIcon from "../assets/construction-worker.svg";
import EducatorIcon from "../assets/educator-icon.svg";
import FactoryIcon from "../assets/factory-icon.svg";
import FooterAddress from "./FooterAddress";
import FooterContact from "./FooterContact";
import GearWheelIcon from "../assets/gear-wheel-icon.svg";
import GovernmentContractorIcon from "../assets/government-contractor-icon.svg";
import HardHatWorkerIcon from "../assets/hardhat-worker-icon.svg";
import Hero from "./Hero";
import HeroImage from "../assets/business-building.jpeg";
import HomeownerIcon from "../assets/homeowner-icon.svg";
import Portfolio from "./Portfolio";
import React from "react";
import RestaurantIcon from "../assets/restaurant-icon.svg";
import SiteTitle from "./SiteTitle";
import Team from "./Team";
import ValueProp from "./ValueProp";
import WorldMap from "../assets/map.png";

function NicePage() {
  return (
    <main>
      <section className="page-name">
        <div className="inner-container max-width flex flex-column flex-justify-center flex-align-center">
          <div className="main-heading">
            <SiteTitle title="Business and Industrial Parks"></SiteTitle>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="inner-container max-width no-padding">
          <div className="hero-bg">
            <Hero imgSrc={HeroImage} imgAlt="Business Building" />
          </div>
        </div>
      </section>
      <section className="hero-cards">
        <div className="inner-container flex flex-column flex-mobile-row-641">
          <div className="hero-headshot"></div>
          <div className="hero-value-proposition">
            <ValueProp valueProposition="We have several business and industrial parks with available space for your business"></ValueProp>
            <CtaBtn btnClasses="btn cta-btn" url="https://www.google.com" btnText="Read More" />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="inner-container max-width flex flex-column">
          <div className="image-right-content-left flex flex-column flex-mobile-row-641">
            <div className="content flex flex-column">
              <About
                title="Construction Machinery Co."
                subhead="We have a proud tradition of service as a General Contractor since 1974"
                description="We headquartered in San Diego, brings over 42 years of local and national construction experience; with a reputation for delivering large and unique design-build projects ahead of schedule and on budget. Our company has served clients and building owners for over four decades."
              />
              <CtaBtn btnClasses="btn cta-btn" url="https://www.google.com" btnText="Read More" />
            </div>
            <div className="image"></div>
          </div>
        </div>
      </section>
      <section className="certifications">
        <div className="inner-container flex flex-column large-gap">
          <div className="certifications-description flex flex-column small-gap">
            <CertsDesc
              certsSmallHeading="What we do"
              certsSecondaryHeading="Company Certifications"
              certsDescription="Our company offers a variety of services to meet your project’s needs, to take you from collaboration meetings all the way to ribbon-cutting and beyond. We believe that every project is unique, and can customize our approach to fit your particular project."
            />
          </div>
          <div className="three-columns flex flex-column flex-mobile-row-641 small-gap">
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <CertsIcons imgSrc={HardHatWorkerIcon} imgAlt="Hardhat Worker Icon" imgWidth={64} imgHeight={64} iconHeading="Healthcare Building" iconDescription="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <CertsIcons imgSrc={EducatorIcon} imgAlt="Educator Icon" imgWidth={64} imgHeight={64} iconHeading="Education Building" iconDescription="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <CertsIcons imgSrc={GovernmentContractorIcon} imgAlt="Government Contractor Icon" imgWidth={64} imgHeight={64} iconHeading="Government Building" iconDescription="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <CertsIcons imgSrc={CommercialContractorIcon} imgAlt="Commercial Contractor Icon" imgWidth={64} imgHeight={64} iconHeading="Commercial Building" iconDescription="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <CertsIcons imgSrc={HomeownerIcon} imgAlt="Homeowner Icon" imgWidth={64} imgHeight={64} iconHeading="Residential Building" iconDescription="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            </div>
            <div className="certification-item flex flex-column flex-align-center x-small-gap">
              <CertsIcons imgSrc={RestaurantIcon} imgAlt="Restaurant Icon" imgWidth={64} imgHeight={64} iconHeading="Restaurant Facilities" iconDescription="Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
            </div>
          </div>
        </div>
      </section>
      <section className="advantages">
        <div className="inner-container no-padding flex flex-column flex-mobile-row-641">
          <div className="left-col flex flex-column flex-align-center flex-justify-center">
            <div className="inner-left-col-wrapper flex flex-column flex-align-center flex-justify-center x-small-gap">
              <AdvantagesDesc
                imgSrc={ConstructionWorkerIcon}
                imgAlt="Construction Worker Icon"
                imgWidth={64}
                imgHeight={64}
                smallHeading="Healthcare Building"
                advantagesDescription="Tiling is an effective way to add elegance & style to any bath or kitchen Yellow Hats Remodeling Team specializes in tile installation and works directly with each."
              />
              <CtaBtn btnClasses="btn cta-btn" url="https://www.google.com" btnText="Read More" />
            </div>
          </div>
          <div className="middle-col"></div>
          <div className="right-col flex flex-column flex-align-center flex-justify-center">
            <div className="inner-right-col-wrapper flex flex-column flex-align-center flex-justify-center x-small-gap">
              <div className="inner-right-icon-box">
                <AdvantagesIcons imgSrc={FactoryIcon} imgAlt="Factory Icon" imgWidth={64} imgHeight={64} smallHeading="Education Building" />
              </div>
              <div className="inner-right-icon-box">
                <AdvantagesIcons imgSrc={GearWheelIcon} imgAlt="Gearwheel Icon with Wrench" imgWidth={64} imgHeight={64} smallHeading="Government Building" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="inner-container no-padding">
          <div className="portfolio-heading">
            <Portfolio smallHeading="Portfolio" tertiaryHeading="Recent Projects" />
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
              <Hero imgSrc={WorldMap} imgAlt="World Map" />
            </div>
            <div className="content flex flex-column">
              <Team
                smallHeading="Elvo Construction"
                tertiaryHeading="The Best World Team"
                teamDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend. Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus. Suspendisse in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus
              sem."
              />
              <CtaBtn btnClasses="btn cta-btn" url="https://www.google.com" btnText="Read More" />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="inner-container flex flex-column max-width">
          <div className="top-half-footer flex flex-column large-gap light-font">
            <div className="top-left-half-footer flex flex-column">
              <FooterAddress
                footerText="Contact us today to plan your boat’s maintenance or repair procedure."
                address="4262 Richison Drive Missoula, MT 59801"
              />
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
