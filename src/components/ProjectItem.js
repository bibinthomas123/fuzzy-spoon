import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    color: var(--white-2);
  }
  .projectItem__title {
    font-size: 2.2rem;
    color: var(--gray-1);
  }
  .projectItem__desc {
    font-family: "RobotoMono Regular";
    font-size: 1.6rem;
    color: var(--subtitle-color);
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = "https://i.ibb.co/7bQQYkX/projectImg.png",
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) {
  return (
    <ProjectItemStyles>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="#" className="projectItem__img">
          <img src={img} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <Link to="#">
            <h3 className="projectItem__title">{title}</h3>
          </Link>
          <p className="projectItem__desc">{desc}</p>
        </div>
      </motion.div>
    </ProjectItemStyles>
  );
}
