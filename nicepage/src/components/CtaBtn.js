import React from "react";

function CtaBtn({ btnClasses, url, btnText }) {
  return (
    <a className={btnClasses} href={url} target="_blank" rel="noreferrer">
      {btnText}
    </a>
  );
}

export default CtaBtn;
