import React from "react";
import Navbar from "../component/NavbarComponent";
import Banner from "../component/Banner";
import Partner from "../component/Partner";
import Faq from "../component/Faq";
import Footer from "../component/Footer";

function Home() {
  return (
    <div className="w-100  home-container d-flex flex-column align-items-center ">
      <Navbar />
      <section className="pt-0 w-100 d-flex justify-content-center">
        <Banner />
      </section>
      <section className="d-flex w-100 justify-content-center">
        <Partner />
      </section>
      <section className="d-flex w-100 justify-content-center">
        <Faq />
      </section>
      <section className="d-flex w-100 justify-content-center pt-0">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
