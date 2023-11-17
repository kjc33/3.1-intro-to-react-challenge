import React from "react";

function FooterContact({ tertiaryHeading, freePhoneHeading, freePhoneNum, telephoneHeading, telephoneNum, faxHeading, faxNum }) {
  return (
    <>
      <h3 className="tertiary-heading">{tertiaryHeading}</h3>
      <table>
        <tbody>
          <tr>
            <td>{freePhoneHeading}</td>
            <td>{freePhoneNum}</td>
          </tr>
          <tr>
            <td>{telephoneHeading}</td>
            <td>{telephoneNum}</td>
          </tr>
          <tr>
            <td>{faxHeading}</td>
            <td>{faxNum}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FooterContact;
