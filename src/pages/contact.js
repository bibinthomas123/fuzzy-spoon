import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm.js";
import ContactInfoItem from "../components/ContactInfoItem.js";
import { motion } from "framer-motion";
const styles = {
  minWidth: 200,
  minHeight: 200,
};
const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--black);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }

  .contact__container {
    background-color: var(--white);
  }

  button {
    outline: none;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <motion.div
      style={styles}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <ContactSectionStyle>
        <div className="contact__container contact">
          <h2 className="section__title">Contact</h2>
          <span className="section__subtitle">get in touch</span>
          <div className="contactSection__wrapper">
            <div className="left">
              <ContactInfoItem
                icon={<i class="bx bx-phone-call bx-sm"></i>}
                text="+91 9121068352"
              />
              <ContactInfoItem
                icon={<i class="bx bx-envelope bx-sm"></i>}
                text="bibinthomas951@gmail.com"
              />
              <ContactInfoItem text="Hyderabad, India" />
            </div>
            <div className="right">
              <ContactForm />
            </div>
          </div>
        </div>
      </ContactSectionStyle>
    </motion.div>
  );
}
