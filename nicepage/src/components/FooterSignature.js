import React from "react";

function FooterSignature({ websiteTemplatesUrl, websiteTemplatesText, websiteBuilderUrl, websiteBuilderText }) {
  return (
    <p className="site-signature">
      <a href={websiteTemplatesUrl} target="_blank" rel="noreferrer">
        {websiteTemplatesText}
      </a>{" "}
      created with{" "}
      <a href={websiteBuilderUrl} target="_blank" rel="noreferrer">
        {websiteBuilderText}
      </a>
      .
    </p>
  );
}

export default FooterSignature;
