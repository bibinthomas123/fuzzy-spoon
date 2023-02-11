import React from "react";
import styled from "styled-components";
import PText from "./PText.js";

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
    color: var(--white);
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
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
