import React from "react";

function Portfolio({ smallHeading, tertiaryHeading }) {
  return (
    <>
      <h2 className="small-heading light-font">{smallHeading}</h2>
      <h3 className="tertiary-heading light-font">{tertiaryHeading}</h3>
    </>
  );
}

export default Portfolio;
