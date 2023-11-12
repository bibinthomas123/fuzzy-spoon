import React, { useEffect, useState } from "react";
import hoverEffect from "hover-effect";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projContainer] = useState([".trek", ".honne", ".kap", ".fin", ".pac"]);

  useEffect(() => {
    AOS.init();

    new hoverEffect({
      parent: document.querySelector("#trek-image"),
      intensity: 0.4,
      image1: "https://i.imgur.com/7eTXJJu.png",
      image2: "https://i.imgur.com/MVlA2W6.png",
      displacementImage: "https://i.imgur.com/CyxD9X6.png",
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 0.5,
    });

    new hoverEffect({
      parent: document.querySelector("#honne-image"),
      intensity: 0.4,
      image1: "https://i.imgur.com/z0MNHGS.png",
      image2: "https://i.imgur.com/z0MNHGS.png",
      displacementImage: "https://i.imgur.com/4Os9Q7o.jpg",
      angle: Math.PI / 8,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 3.7 / 1.5,
    });

    new hoverEffect({
      parent: document.querySelector("#kap-image"),
      intensity: 0.4,
      image1: "https://i.imgur.com/BSWq7oD.png",
      image2: "https://i.imgur.com/BSWq7oD.png",
      displacementImage: "https://i.imgur.com/4Os9Q7o.jpg",
      angle: Math.PI / 8,
      speedIn: 1.5,
      speedOut: 1.5,
      imagesRatio: 1.17,
    });

    new hoverEffect({
      parent: document.querySelector("#fin-image"),
      intensity: 0.4,
      image1: "https://i.imgur.com/LXtbJSv.png",
      image2: "https://i.imgur.com/2qUvTgr.png",
      displacementImage: "https://i.imgur.com/CyxD9X6.png",
      speedIn: 1.5,
      speedOut: 1.5,
      angle: Math.PI / 8,
      imagesRatio: 0.5,
    });

    new hoverEffect({
      parent: document.querySelector("#pac-image"),
      intensity: 0.4,
      image1: "https://i.imgur.com/kXiOi5j.png",
      image2: "https://i.imgur.com/SbYPbw4.png",
      displacementImage: "https://i.imgur.com/4Os9Q7o.jpg",
      speedIn: 1.5,
      speedOut: 1.5,
      angle: Math.PI / 5,
      imagesRatio: 1.17,
    });

    const containers = projContainer.map((el) =>
      document.querySelector(el + "-container")
    );
    let currentPos = window.pageYOffset;
    const distort = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.05;

      containers.map((el) => (el.style.transform = `skewY(${speed}deg)`));
      currentPos = newPos;
      requestAnimationFrame(distort);
    };
    distort();
  }, []);

  const show = (e) => {
    e.target.firstChild.innerText = "CLICK TO EXPLORE APP 🧐";
  };

  const remove = (e) => {
    const images = ["honne-image", "kap-image", "fin-image", "pac-image"];
    const dates = ["15.04.20", "24.03.20", "11.03.20", "20.01.20"];

    images.map((el, i) =>
      e.target.id === el ? (e.target.firstChild.innerText = dates[i]) : null
    );
  };

  return (
    <>
      <div
        id="para"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease"
        data-aos-offset="200"
      >
        <h1 className="section-titlea ">
          {" "}
          <small> (001) </small> Recent Work{" "}
        </h1>
      </div>

      <h5 className="text-slider">
        <span>
          - AURA - AURA - AURA - AURA - AURA - AURA - AURA - AURA - AURA - AURA
          - AURA - AURA - AURA - AURA - AURA - AURA -
        </span>
      </h5>

      <div className="trek-container">
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="800"
          data-aos-easing="ease"
          id="trek-image"
        >
          <p> 03.06.20 </p>
        </div>

        <img
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="800"
          data-aos-easing="ease"
          src="https://i.imgur.com/NyOmmN7.png"
          alt=""
        />

        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          id="proj-text"
        >
          <h1>Aura </h1>
          <div></div>
          <p>
            {" "}
            <small> PRJ CONCPT </small> <br />
            Explore the dynamic world of Aura Journeys, a fully functional
            MERN-stack masterpiece redefining the travel experience. Crafted by
            a dedicated individual, this blog offers an immersive look into the
            app's evolution, seamlessly blending journey planning, live updates,
            and social connectivity.
            <br></br> <br></br> Navigate the GitHub repository to witness the
            ongoing MERN-stack magic behind Aura Journeys—a continually
            expanding narrative in the realm of travel technology. Join us as we
            chart the course for an enriching and ever-evolving experience with
            Aura Journeys, where each post unfolds the limitless possibilities
            of this captivating travel blog.
          </p>
          <br />
          <small> TECH BEING IMPLEMENTED</small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> MongoDB </li>
            <li> Mongoose </li>
            <li> Node.js </li>
            <li> Express.js</li>
            <li> HTML5/SASS </li>
            <li> GreenSock Animation Platform </li>
            <li> React Map GL </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
          </ul>
          <br />
          <a href="https://github.com/bibinthomas123/blog">
            <ion-icon name="logo-github"></ion-icon> VIEW REPO{" "}
          </a>
        </div>
        <svg id="circle-1" width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div>

      <h5 className="text-slider">
        <span>
          - SONO - SONO - SONO - SONO - SONO - SONO - SONO - SONO - SONO - SONO
          - SONO - SONO - SONO - SONO - SONO - SONO -
        </span>
      </h5>

      <div className="honne-container">
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          id="proj-text"
        >
          <h1> Sono </h1>
          <p>
            {" "}
            <small> PRJ CONCPT </small> <br />
            Sono is my take on a Spotify clone, a project born out of my passion
            for music and fascination with web development. This platform
            mirrors the core functionalities of Spotify, offering users a
            seamless and enjoyable music streaming experience. From curated
            playlists to a sleek and responsive interface, Sono is a testament
            to my skills in front-end and back-end development.
            <br></br> Dive into your favorite tunes with ease, experiencing a
            harmonious blend of technology and melody. Sono is not just a
            project; it's a musical journey tailored to resonate with every
            user.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6)</li>
            <li> Django Rest Framework </li>
            <li> Python </li>
            <li> PostgreSQL</li>
            <li> HTML5/SASS </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
            <li> React Map GL </li>
            <li> GreenSock Animation Platform </li>
          </ul>
          <br />
          <a href="https://github.com/seangpachareonsub/honne">
            <ion-icon name="logo-github"></ion-icon> VIEW REPO{" "}
          </a>
        </div>
        <a href="https://ga-honne.herokuapp.com/" target="_blank">
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="800"
            data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id="honne-image"
          >
            <p> 15.04.20 </p>
          </div>
        </a>
      </div>

      <h5 className="text-slider">
        <span>
          - NAV - NAV - NAV - NAV - NAV - NAV - NAV - NAV - NAV - NAV - NAV -
          NAV - NAV - NAV - NAV - NAV -
        </span>
      </h5>

      <div className="kap-container">
        <a href="https://ga-kap.herokuapp.com/" target="_blank">
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="800"
            data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id="kap-image"
          >
            <p> 24.03.20 </p>
          </div>
        </a>
        <img
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="800"
          data-aos-easing="ease"
          src="https://i.imgur.com/MYtlWlw.png"
          alt=""
        />
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          id="proj-text"
        >
          <h1> NAV </h1>
          <div></div>
          <p>
            {" "}
            <small> PRJ CONCPT </small> <br />
            NAV is a Node.js server project that simplifies ticket creation in
            payment gateways. It automates the process, generating individual
            tickets and sending email notifications to users.
            <br></br>
            <br></br>
            This straightforward solution enhances efficiency, making NAV an
            essential tool for automated and hassle-free ticketing systems.
            Explore NAV's capabilities on this portfolio, showcasing the power
            and simplicity of Node.js in server-side automation.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> MongoDB </li>
            <li> Mongoose </li>
            <li> Node.js </li>
            <li> Express.js</li>
            <li> HTML5/SASS </li>
            <li> GreenSock Animation Platform </li>
            <li> Axios </li>
            <li> JSON Web Token </li>
            <li> Nodemailer </li>
          </ul>
          <br />
          <a href="https://github.com/seangpachareonsub/kap">
            <ion-icon name="logo-github"></ion-icon> VIEW REPO{" "}
          </a>
        </div>
        <svg id="circle-1" width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div>

      <h5 className="text-slider">
        <span>
          - DASH - DASH - DASH - DASH - DASH - DASH - DASH - DASH - DASH - DASH
          - DASH - DASH - DASH - DASH -
        </span>
      </h5>

      <div className="fin-container">
        <a href="http://seangpachareonsub.com/financier/" target="_blank">
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="800"
            data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id="fin-image"
          >
            <p> 11.03.20 </p>
          </div>
        </a>
        <img
          id="fin-imageTwo"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="800"
          data-aos-easing="ease"
          src="https://i.imgur.com/8jmRsRA.png"
          alt=""
        />

        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          id="proj-text"
        >
          <h1> Dash </h1>
          <p>
            {" "}
            <small> PRJ CONCPT </small> <br />
            Explore DASH, a Next.js-powered MERN stack project, offering a
            versatile dashboard for various purposes. This sleek and efficient
            solution simplifies complex tasks, providing a user-friendly
            experience.
            <br></br>
            Dive into DASH on this portfolio, where Next.js seamlessly combines
            with MongoDB, Express, React, and Node.js to create a powerful yet
            straightforward dashboard. Discover the simplicity and versatility
            of DASH, designed to streamline tasks and enhance user experiences.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> React.js </li>
            <li> JavaScript (ES6) </li>
            <li> HTML5/SASS </li>
            <li> Moment.js</li>
            <li> Axios </li>
            <li> New York Times API </li>
            <li> CoinGecko API </li>
          </ul>
          <br />
          <a href="https://github.com/seangpachareonsub/financier">
            <ion-icon name="logo-github"></ion-icon> VIEW REPO{" "}
          </a>
        </div>

        <svg id="circle-1" width="23vw" height="23vw" className="circle">
          <circle cx="11.5vw" cy="11.5vw" r="11.4vw" />
        </svg>
        <div className="arrow"></div>
      </div>

      <h5 className="text-slider">
        <span>
          - TODAY - TODAY - TODAY - TODAY - TODAY - TODAY - TODAY - TODAY -
          TODAY - TODAY - TODAY - TODAY - TODAY - TODAY -
        </span>
      </h5>

      <div className="pac-container">
        <a
          href="http://seangpachareonsub.com/pac-man/src/index.html"
          target="_blank"
        >
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="800"
            data-aos-easing="ease"
            onMouseEnter={(e) => show(e)}
            onMouseLeave={(e) => remove(e)}
            id="pac-image"
          >
            <p> 20.01.20 </p>
          </div>
        </a>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          id="proj-text"
        >
          <h1>Today</h1>
          <p>
            {" "}
            <small> PRJ CONCPT </small> <br />
            TODAY is a basic todo project crafted with Flask, keeping task
            management simple and efficient. This straightforward solution
            offers an uncomplicated approach to organizing your day. Explore
            TODAY on this portfolio, where Flask's elegance creates a minimal
            yet effective todo experience. With TODAY, simplicity meets
            functionality, providing a hassle-free way to manage your tasks
            effectively.
          </p>
          <br />
          <small> TECH FEATURED </small>
          <ul>
            <li> JavaScript (ES6) </li>
            <li> HTML5/CSS </li>
          </ul>
          <br />
          <a href="https://github.com/seangpachareonsub/pacman">
            <ion-icon name="logo-github"></ion-icon> VIEW REPO{" "}
          </a>
        </div>
      </div>

      <h6> More projects coming soon ... </h6>
    </>
  );
};

export default Projects;
