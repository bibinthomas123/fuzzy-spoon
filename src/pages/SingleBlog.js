import React from "react";
import blogData from "../data/blogs";
import { useParams } from "react-router-dom";
import SharePost from "../components/SharePost";

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === Number(id));

  console.log(blog);
  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <section className="section singleBlog">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {blog.title}
              </h2>
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 flex items-center">
                    <p className="mr-5 flex items-center text-base font-medium text-body-color">
                      {/* 
                    calendar icon 
                */}
                      <i className="bx bx-calendar-md"></i>
                      {blog.publishDate}
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <a
                    href="#0"
                    className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
                  >
                    {blog.tags}
                  </a>
                </div>
              </div>

              <div>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={blog.image}
                      alt="imaget454rfrthrh"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {blog.paragraph}
                </p>
              </div>
              <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                Share this post :
              </h5>
              <div className="flex items-center sm:justify-end">
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
