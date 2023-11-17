import React from "react";

function Hero({ imgSrc, imgAlt }) {
  return (
    <figure>
      <img src={imgSrc} alt={imgAlt} />
    </figure>
  );
}

export default Hero;
