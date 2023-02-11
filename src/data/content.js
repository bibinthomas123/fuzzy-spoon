import { v4 as uuidv4 } from "uuid";

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
        name: "Working at",
        desc: "Whizoid Studio",
        icon: "bx bx-briefcase-alt-2",
      },
      {
        name: "Position",
        desc: "Internship",
        icon: "uil uil-sitemap",
      },
      {
        name: "Status",
        icon: "bx bx-bulb",
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
          level: "80%",
        },
        {
          name: "Javascript",
          level: "70%",
        },
        {
          name: "Bootstrap",
          level: "90%",
        },
        {
          name: "React Js",
          level: "80%",
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
          level: "80%",
        },
        {
          name: "Express Js",
          level: "85%",
        },
        {
          name: "MongoDB",
          level: "70%",
        },
        {
          name: "SQL",
          level: "70%",
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
  services: {
    title: "Services",
    desc: "What I can do for you",
    cardDetails: [
      {
        id: 1,
        title: ["Sketch"],
        icon: "uil uil-object-ungroup",
        desc: " It is a visual representation of the final product that will be developed.",
        content:
          "The web design sketch is the most important part of the design process. A web design sketch should not only show a website’s layout, but also its content, navigation, and interactive elements. The sketch should be created on paper or with digital tools like Photoshop or Figma",
      },
      {
        id: 2,
        title: ["Create ", " Backend"],
        icon: "uil uil-server-connection",
        desc: "Frontend design makes webpages and apps appealing and interactive.",
        content: `What we call the "backend" of a website or app is actually the "server-side architecture and logic" that provides for and manages the "frontend data  and features.`,
      },
      {
        id: 3,
        title: ["UI", " Design"],
        icon: "uil uil-icons",
        desc: "A user interface is the part of a computer system that a user interacts with in order to enter commands and information.",
        content:
          " It is often referred to as the 'face' of the system. It can be graphically displayed on a monitor, or it can be a text-only interface such as those commonly found on mobile devices. I provided the UI which will satifies your requirements and the the clients",
      },
      {
        id: 4,
        title: ["Responsive ", " Design"],
        icon: "uil uil-mobile-android",
        desc: "Web design that adapts to different screen sizes and devices is called responsive design.",
        content:
          "Responsive design is a technique in web design for creating websites that provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices The website will be displayed in the best possible way depending on the device being used.",
      },
      {
        id: 5,
        title: ["API ", " Design"],
        icon: "uil uil-cloud-database-tree",
        desc: "Developers utilise API endpoints to connect to applications and software systems.",
        content:
          "API stands for Application programming interface. API is a multi-featured interface. This group of functions lets programmers get application data or specialised attributes. Web APIs are HTTP-accessible APIs. This framework helps build HTTP-based RESTFUL services.",
      },
      {
        id: 6,
        title: ["Create ", " Frontend"],
        icon: "uil uil-laptop",
        desc: "Frontend design makes webpages and apps appealing and interactive.",
        content:
          "The frontend developer is responsible for the design, content and functionality of a website or web application. They are usually responsible for HTML, CSS, JavaScript, and other scripting languages that are used to create interactive web pages.",
      },
    ],
  },
  portfolio: {
    cardDetails: [
      {
        id: 1,
        category: "DEVELOPMENT",
        totalLike: "600",
        title: "The services provide for design ",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 2,
        category: "APPLICATION",
        totalLike: "750",
        title: "Mobile app landing design & maintain",
        image:
          "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        id: 3,
        category: "PHOTOSHOP",
        totalLike: "630",
        title: "Logo design creativity & Application ",
        image: "./image/portfolio-03.jpg",
      },
      {
        id: 4,
        category: "FIGMA",
        totalLike: "360",
        title: "Mobile app landing design & Services",
        image: "./image/portfolio-04.jpg",
      },
      {
        id: 5,
        category: "WEB DESIGN",
        totalLike: "280",
        title: "Design for tecnology & services",
        image: "./image/portfolio-05.jpg",
      },
      {
        id: 6,
        category: "WEB DESIGN",
        totalLike: "690",
        title: "App for tecnology & services",
        image: "./image/portfolio-06.jpg",
      },
    ],
  },
  projects: [
    {
      id: uuidv4(),
      name: "U Tracker",
      desc: "An application to track your all data from one place. I developed the website and the mobile app",
      img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
    },
    {
      id: uuidv4(),
      name: "Green CTG",
      desc: "An app to help people to get an overview of how they can make the city beautiful.",
      img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
    },
    {
      id: uuidv4(),
      name: "Coin Tracker",
      desc: "Using this app you can track any e coin. Also you will get a good advise about investment form the professional",
      img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
    },
    {
      id: uuidv4(),
      name: "Cavin's Portfolio",
      desc: "A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.",
      img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
    },
    {
      id: uuidv4(),
      name: "Tracking Soft",
      desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",
      img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
    },
  ],
};

export default WebsiteData;
