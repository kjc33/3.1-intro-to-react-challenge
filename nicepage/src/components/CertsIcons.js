import React from "react";

function CertsIcons({ imgSrc, imgAlt, imgWidth, imgHeight, iconHeading, iconDescription }) {
  return (
    <>
      <figure>
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </figure>
      <h4 className="tertiary-heading">{iconHeading}</h4>
      <p className="body-font light-font">{iconDescription}</p>
    </>
  );
}

export default CertsIcons;
