import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Customcursor from "./components/Custom";
import SeoTitle from "./components/MetaTags";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Customcursor />
      {/* <SeoTitle
        title="Bibin Thomas | Web Developer"
        description="I am Bibin Thomas, a skilled web developer with a passion for developing elegant and effective business solutions. I am proficient in frontend and backend development and deliver high-quality websites that are optimised for speed, usability, and search engines. Take a look at my portfolio, and don't hesitate to get in touch with me if you want to take your web project to the next level."
        keywords="Bibin Thomas Web developer React Portfolio High-quality websites Optimization Speed Usability Search engine optimization Business solutions Efficient solutions Client satisfaction Responsive design Cross-browser compatibility Front-end development Back-end development Full-stack development Custom web development Freelance web developer Web development services."
      /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
