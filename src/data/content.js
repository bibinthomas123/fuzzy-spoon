const WebsiteData = {
  home: {
    title: "Hi, I'm Bibin",
    desc: "I'm a full stack developer based in India, and I'm very passionate and dedicated to my work.",
    socialItems: [
      {
        link: "https://www.instagram.com/bibinthomas951/",
        icon: "uil-instagram",
      },
      {
        link: "https://github.com/bibinthomas123",
        icon: "uil-github",
      },
      {
        link: "https://www.linkedin.com/in/bibin-thomas-1962a2225/",
        icon: "uil-linkedin",
      },
    ],
  },
  about: {
    title: "About Me",
    desc: "Pursuing Computer Science and cognitive system .Aspiring AWS Solution Architect Associate. Organized an dependable candidate successful at managing multiple priorities with a positive attitude",
    cardDetails: [
      {
        name: "Experience",
        desc: "Whizoid Studio",
      },
      {
        name: "Projects",
        desc: "30+ projects",
      },
      {
        name: "Status",
        desc: (
          <>
            <span
              style={{ color: "red", fontSize: "15px", fontWeight: "bold" }}
            >
              Working
            </span>
          </>
        ),
      },
    ],
  },
  skills: {
    title: "Skills",
    desc: "My Technical Level",

    frontend: {
      title: "Frontend Skills",
      skills: [
        {
          name: "HTML",
          level: "90%",
        },
        {
          name: "CSS",
          level: "90%",
        },
        {
          name: "Javascript",
          level: "90%",
        },
        {
          name: "Bootstrap",
          level: "90%",
        },
        {
          name: "React Js",
          level: "90%",
        },
        {
          name: "Git",
          level: "90%",
        },
      ],
    },
    backend: {
      title: "Backend Skills",
      skills: [
        {
          name: "Node Js",
          level: "90%",
        },
        {
          name: "Express Js",
          level: "90%",
        },
        {
          name: "MongoDB",
          level: "90%",
        },
        {
          name: "SQL",
          level: "90%",
        },
        {
          name: "Flask",
          level: "90%",
        },
        {
          name: "API",
          level: "90%",
        },
      ],
    },
  },
};

export default WebsiteData;
