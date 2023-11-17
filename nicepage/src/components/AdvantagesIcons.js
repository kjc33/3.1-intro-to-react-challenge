import React from "react";

export default function AdvantagesIcons({ imgSrc, imgAlt, imgWidth, imgHeight, smallHeading }) {
  return (
    <>
      <figure>
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </figure>
      <h2 className="small-heading">{smallHeading}</h2>
    </>
  );
}
