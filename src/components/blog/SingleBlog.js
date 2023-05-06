import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleBlogContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  min-height: 500px;
  min-width: 335px;
`;

const SingleBlogLink = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
`;

const SingleBlogSpan = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: var(--container-color-dark);
  color: #fff;
  padding: 5px 10px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const SingleBlogImage = styled.img`
  width: 100%;
  height: auto;
  padding: 0px;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
`;

const SingleBlogTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const SingleBlogParagraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #6b7280;
`;

const SingleBlog = ({ blog }) => {
  const { title, image, paragraph, tags } = blog;
  return (
    <>
      {" "}
      <SingleBlogContainer data-wow-delay=".1s">
        <SingleBlogLink to="/" className="singleBlog">
          <SingleBlogImage src={image} alt="image" />
          <SingleBlogSpan>{tags[0]}</SingleBlogSpan>
        </SingleBlogLink>
        <div>
          <SingleBlogTitle>
            <SingleBlogLink to="/" className="singleBlog__title">
              {title}
            </SingleBlogLink>
          </SingleBlogTitle>
          <SingleBlogParagraph>{paragraph}</SingleBlogParagraph>
        </div>
      </SingleBlogContainer>
    </>
  );
};

export default SingleBlog;
