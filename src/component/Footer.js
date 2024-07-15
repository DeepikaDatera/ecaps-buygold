import React from "react";
import logo from "../asset/logo.svg";
import instagram from "../asset/instagram.svg";
import twitter from "../asset/twitter.svg";
import facebook from "../asset/facebook.svg";
import youtube from "../asset/youtube.svg";
import linkedin from "../asset/linkedin.svg";
import playStore from "../asset/playStore.svg";
import apple from "../asset/apple.svg";

function Footer() {
  return (
    <footer className="box-container bordor-top">
      <div className="row footer-section mb-lg-4 mb-3 px-4 px-lg-0">
        <div className="col-lg-4 d-flex flex-column gap-4 ">
          <div className="logo">
            <img src={logo} className="w-100" />
          </div>
          <span>
            Jar, a platform used to encourage savings habits in Indians by
            helping them save on a daily basis.
          </span>
          <div className="d-flex icon gap-3">
            <img src={instagram} />
            <img src={twitter} />
            <img src={facebook} />
            <img src={youtube} />
            <img src={linkedin} />
          </div>
          <div className="social-btn d-flex gap-3">
            <div className=" d-flex border rounded px-2 pb-2 pt-1">
              <img src={apple} />
              <div className="d-flex flex-column ps-2">
                <span className="p-0">Get it on</span>
                <span className="p-0 big">Google Play</span>
              </div>
            </div>
            <div className=" d-flex border rounded px-2 p-1 pb-2">
              <img src={playStore} />
              <div className="d-flex flex-column ps-2">
                <span className="p-0">Get it on</span>
                <span className="p-0 big">App Store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 my-5 my-lg-0"></div>

        <div className="col-lg-2 col-6">
          <span className="link-heading">Jar</span>
          <ul className="p-0 mt-4 d-flex flex-column gap-3">
            {[
              "Homepage",
              "About us",
              "Daily Savings",
              "Round-offs",
              "Careers",
            ].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-lg-2 col-6">
          <span className="link-heading">Explore</span>
          <ul className="p-0 mt-4 d-flex flex-column gap-3">
            {[
              "Instant Loan",
              "What is Digital Gold?",
              "Check Gold Price",
              "FAQs",
              "Blogs",
            ].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row footer-section px-4 px-lg-0">
        <div className="col-4 d-flex flex-column gap-4 ">
          <span className="link-heading">Address</span>
          <span>
            No. 752, 18th main, 6th block, 5th cross Koramangala Bangalore -
            560095.
          </span>
        </div>
        <div className="col-4"></div>

        <div className="col-2">
          <ul className="p-0 mt-4 d-flex flex-column gap-3">
            {["Privacy Policy", "Term of Use"].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-2">
          <ul className="p-0 mt-4 d-flex flex-column gap-3">
            {["Grievence Redressel"].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-section text-center pb-lg-0 pb-3 pt-4 pt-lg-5 mb-0">
        <span>© ChangeJar Technologies Pvt. Ltd.</span>
      </div>
    </footer>
  );
}

export default Footer;
