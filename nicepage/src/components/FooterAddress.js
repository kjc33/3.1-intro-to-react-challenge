import React from "react";

function FooterAddress({ footerText, address }) {
  return (
    <>
      <p className="footer-text">{footerText}</p>
      <p className="address">{address}</p>
    </>
  );
}

export default FooterAddress