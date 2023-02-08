import React from "react";
import Social from "../components/Social";
import Data from "../components/Data";
import ScrollDown from "../components/ScrollDown";
import WebsiteData from "../data/content.js";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social data={WebsiteData.home.socialItems} />
          <div className="home__img"></div>
          <Data
            title={WebsiteData.home.title}
            content={WebsiteData.home.desc}
          />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
