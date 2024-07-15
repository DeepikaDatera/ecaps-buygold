import React from "react";
import partner1 from "../asset/partner1.svg";
import partner2 from "../asset/partner2.svg";
import partner3 from "../asset/partner3.svg";

function Partner() {
  return (
    <div className="text-center partner box-container px-4">
      <h4 className="section-heading">Our Trusted Partners</h4>
      <div className="section-subtitle">
        Get safe and secure services with the best privacy and gold service
        providers
      </div>

      <div className="partner-logo d-flex gap-4  justify-content-center">
        <img src={partner1} />
        <img src={partner2} />
        <img src={partner3} />
      </div>
    </div>
  );
}

export default Partner;
