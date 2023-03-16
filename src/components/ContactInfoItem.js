import React from "react";
import styled from "styled-components";
import PText from "./PText.js";
import { motion } from "framer-motion";

const ItemStyles = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  overflow-x: visible;
  .icon {
    color: var(--subtitle-color);
    background-color: var(--gray-2);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
  img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    outline: none;
  }
`;

export default function ContactInfoItem({
  icon = <i className="bx bx-map bx-sm"></i>,
  text = "I need text ",
  index,
}) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.3 }}
    >
      <ItemStyles>
        <div className="icon">{icon}</div>
        <div className="info">
          <PText>{text}</PText>
        </div>
      </ItemStyles>
    </motion.div>
  );
}
