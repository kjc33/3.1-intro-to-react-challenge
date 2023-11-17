import React from "react";

function About({ title, subhead, description }) {
  return (
    <>
      <h2 className="primary-heading">{title}</h2>
      <h3 className="small-heading">{subhead}</h3>
      <p>{description}</p>
    </>
  );
}

export default About;
