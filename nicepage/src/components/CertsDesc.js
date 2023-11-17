import React from "react";

function CertsDesc({ certsSmallHeading, certsSecondaryHeading, certsDescription }) {
  return (
    <>
      <h2 className="small-heading">{certsSmallHeading}</h2>
      <h3 className="secondary-heading">{certsSecondaryHeading}</h3>
      <p className="body-font light-font">{certsDescription}</p>
    </>
  );
}

export default CertsDesc;
