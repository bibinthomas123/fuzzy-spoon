import styled from "styled-components";
import WebsiteData from "../data/content";
import Reactjs from "../assests/images/frontend.png";
import Nodejs from "../assests/images/nodejs.png";
import Vscode from "../assests/images/vscode.png";
import Python from "../assests/images/python.png";
import { motion } from "framer-motion";
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin: 30px;
  color: #333;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillIcon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

const SkillName = styled.p`
  font-size: 18px;
  margin: 0;
`;

const Section = styled(motion.div)`
  position: relative; /* Add this line to establish a positioning context */
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled(motion.img)`
  position: absolute;
  bottom: 4px;
  right: 7px;
  width: 250px;
  height: 250px;
`;

function Skills() {
  const imagePath = [Reactjs, Nodejs, Vscode, Python];

  return (
    <div className="container">
      <section className="skills section" id="skills">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Skills
        </motion.h2>
        <motion.span
          className="section__subtitle"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          My skills
        </motion.span>
        <Container>
          {WebsiteData.skills.map((category, i) => (
            <Section
              key={category.section}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 200}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Title>{category.section}</Title>
              <SkillList>
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name}>
                    <SkillIcon className={skill.icon}></SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillList>

              <Image
                src={imagePath[i]}
                alt="react"
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              />
            </Section>
          ))}
        </Container>
      </section>
    </div>
  );
}

export default Skills;
