import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogGrid from "../components/blog/BlogGrid";
import blogData from "../data/blogs";

function Blog() {
  const [selectedTags, setSelectedTags] = useState([]);

  // Function to handle tag selection
  const handleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const sortedBlogs = blogData.sort((a, b) => {
    const dateA = new Date(
      a.publishDate.replace(/(\d+)\/(\w+)\/(\d+)/, "$2 $1, $3")
    );
    const dateB = new Date(
      b.publishDate.replace(/(\d+)\/(\w+)\/(\d+)/, "$2 $1, $3")
    );
    // Sort from newest to oldest
    return dateB - dateA;
  });

  // Extract unique tags from blogData
  const allTags = blogData.flatMap((blog) => blog.tags);
  const tags = Array.from(new Set(allTags));

  // Define colors for each tag
  const tagColors = {
    tag1: "#248EA6",
    tag2: "#25C7D9",
    tag3: "#F2D338",
    tag4: "#F2622E",
    tag5: "#F23030",
    tag6: "#0B2B40",
    tag7: "#89D99D",
    tag8: "#F06060",
  };

  // Filter blogs based on selected tags
  const filteredBlogs = selectedTags.length
    ? sortedBlogs.filter((blog) =>
        blog.tags.some((tag) => selectedTags.includes(tag))
      )
    : sortedBlogs;

  // Function to handle selecting all tags
  const handleAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="container">
      <section className="blog section">
        <motion.h2
          className="section__title"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -150, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          style={{ marginBottom: "5.5rem" }}
        >
          My Blogs
        </motion.h2>

        <div className="tag__container">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            Filter by Tags:
          </motion.h3>
          <div className="tags">
            <motion.button
              style={{
                margin: "0.5rem 0.5rem 0.5rem 0",
                backgroundColor: tagColors[`tag${8}`],
                color: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
              }}
              className={`tag ${selectedTags.length === 0 ? "selected" : ""}`}
              onClick={handleAllTags}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              All
            </motion.button>
            {tags.map(
              (tag, index) =>
                filteredBlogs.some((blog) => blog.tags.includes(tag)) && (
                  <motion.button
                    style={{
                      margin: "0.5rem 0.5rem 2rem 0",
                      backgroundColor: tagColors[`tag${index + 1}`],
                      color: "#fff",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      textTransform: "uppercase",
                    }}
                    key={tag}
                    className={`tag ${
                      selectedTags.includes(tag) ? "selected" : ""
                    }`}
                    onClick={() => handleTagSelection(tag)}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  >
                    {tag}
                  </motion.button>
                )
            )}
          </div>
        </div>

        <div className="blog__container">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <motion.div
                key={index}
                style={{ width: "100%" }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <BlogGrid blog={blog} />
              </motion.div>
            ))
          ) : (
            <p>No blogs found with the selected tag.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;
