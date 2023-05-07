import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import slugify from "slugify";
import readingTime from "reading-time/lib/reading-time";

const BlogGridContainer = styled.div`
  position: relative;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  min-height: 500px;
  max-height: 600px;
  min-width: 335px;
`;

const BlogGridLink = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
`;

const BlogGridSpan = styled.span`
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

const BlogGridImage = styled.img`
  width: 100%;
  height: auto;
  padding: 0px;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
`;

const BlogGridTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const BlogGridParagraph = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #6b7280;
`;
const BlogReadTime = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #6b7280;
  z-index: 9999;
`;

const BlogGrid = ({ blog }) => {
  const { title, image, paragraph, tags } = blog;

  const words = readingTime(paragraph.props.children, {
    wordsPerMinute: 100,
  });

  const time = words.text;

  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  return (
    <BlogGridContainer data-wow-delay=".1s">
      <BlogGridLink to={`/blogs/${slug}`} className="blogGrid">
        <BlogGridImage src={image} alt="image" />
        <BlogGridSpan>{tags[0]}</BlogGridSpan>
      </BlogGridLink>
      <div>
        <BlogGridTitle>
          <BlogGridLink to={`/blogs/${slug}`} className="blogGrid__title">
            {title}
          </BlogGridLink>
        </BlogGridTitle>
        <BlogGridParagraph className="blogGrid__paragragh">
          {paragraph}
        </BlogGridParagraph>
        <BlogReadTime>{time}</BlogReadTime>
      </div>
    </BlogGridContainer>
  );
};

export default BlogGrid;
