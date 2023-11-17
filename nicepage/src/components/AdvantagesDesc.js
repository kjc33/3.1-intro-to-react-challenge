import React from "react";

function AdvantagesDesc({ imgSrc, imgAlt, imgWidth, imgHeight, smallHeading, advantagesDescription }) {
  return (
    <>
      <figure>
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </figure>
      <h2 className="small-heading">{smallHeading}</h2>
      <p className="body-font">{advantagesDescription}</p>
    </>
  );
}

export default AdvantagesDesc;
