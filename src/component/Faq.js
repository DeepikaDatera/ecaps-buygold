import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";

function Faq() {
  const [readMore, setReadMore] = useState(3);

  const faqContent = [
    {
      title: "Is the Jar App safe to use?",
      body: "Jar app is 100% safe and secure to use for your Daily Savings & Investments in Gold. It is powered by SafeGold and all payments happen over secure banking networks.",
    },
    {
      title: "What does the Jar App do?",
      body: "Jar is an Automated Investment app that lets you Save and Invest money into Digital Gold. It invests spare change from your online transactions into Digital Gold, automatically. Jar is the first Made in India app to come up with an Innovative Solution to Save Money Daily and Invest in Digital Gold.",
    },
    {
      title: "How do I download the Jar App?",
      body: "Jar App is available on iOS, Android mobile devices. Click on the Download App button to install the app and you can buy Digital Gold online. You can also use the website but currently it has limited fuctionality.",
    },
    {
      title:
        "Is KYC required to Start Investing in Digital Gold using Jar App?",
      body: "KYC verification is not required to start saving with Jar. A one-step new user sign-in lets you start Investing in Digital Gold immediately.",
    },
    {
      title: "What is Digital Gold?",
      body: "Digital gold is Real gold that’s simply stored virtually to save space, provide safety, and buy or convert into physical gold conveniently with the click of a button. Check Digital Gold Price today and Start Investing.",
    },
    {
      title: "Is digital gold Real gold?",
      body: "Yes, Digital Gold is a real 24-karat Pure Gold and can be bought for as low as ₹10 using Jar App which means one doesn't have to worry about storing it in a safe place. All you need is the Jar App on your smartphone, and you're set for Gold Investment.",
    },
    {
      title: "Where is my gold saved?",
      body: "The gold you buy is stored securely at world-class Brinks Vaults. The services offered by the Jar app are offered by SafeGold as a provider.",
    },
    {
      title: "How to Buy Digital Gold?",
      body: "You can buy 24k Digital Gold by creating an account in Jar App in just 45 Seconds. You can also get your Gold Delivered to your doorstep if you buy Gold Coins or Bars from Jar’s App. Just Check on Buy Gold on navbar and you are good to go",
    },
  ];

  return (
    <div className="text-center box-container px-4">
      <h4 className="section-heading">Frequently Asked Questions</h4>
      <div className="section-subtitle">You asked, we answered</div>
      <Accordion className="d-flex flex-column gap-4">
        {faqContent.map((item, i) =>
          i <= readMore ? (
            <Accordion.Item eventKey={i} className="border-0 rounded py-2">
              <Accordion.Header className="text-white">
                {item.title}
              </Accordion.Header>
              <Accordion.Body className="text-start pt-0">
                {item.body}
              </Accordion.Body>
            </Accordion.Item>
          ) : (
            ""
          )
        )}
        {faqContent.length - 1 !== readMore && (
          <div>
            <Button
              className="read px-5 py-3"
              onClick={() => setReadMore(faqContent.length - 1)}
            >
              Read More
            </Button>
          </div>
        )}
      </Accordion>
    </div>
  );
}

export default Faq;
