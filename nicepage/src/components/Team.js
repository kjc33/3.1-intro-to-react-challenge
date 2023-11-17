import React from "react";

function Team({ smallHeading, tertiaryHeading, teamDescription }) {
  return (
    <>
      <h2 className="small-heading">{smallHeading}</h2>
      <h3 className="tertiary-heading">{tertiaryHeading}</h3>
      <p className="body-font">{teamDescription}</p>
    </>
  );
}

export default Team;
