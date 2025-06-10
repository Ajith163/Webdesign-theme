import React from "react";
import Ofz1 from "../assets/ofz1.jpg";
import Ofz2 from "../assets/ofz2.jpg";
import Ofz3 from "../assets/ofz3.jpg";

const blogPosts = [
  {
    title: "A Surprising Tool To Help You Agency",
    date: "7 March, 2024",
    author: "Johne Doe",
    image: Ofz1,
    category: "MARKETING",
  },
  {
    title: "The Anthony Robins Guide To Agency",
    date: "7 March, 2024",
    author: "Johne Doe",
    image: Ofz2,
    category: "MARKETING",
  },
  {
    title: "The Anthony Robins Guide To Agency",
    date: "7 March, 2024",
    author: "Johne Doe",
    image: Ofz3,
    category: "MARKETING",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog-section">
      <div className="blog-header">
        <p className="text-danger fw-semibold">NEWS FEED</p>
        <h2 className="bg">Our Latest Blog</h2>
      </div>

      <div className="blog-grid container gap-2 gap-md-0">
        {blogPosts.map((post, index) => (
          <div className="blog-card col-11 " key={index}>
            <div className=" shadow-sm glass-effect" style={{ position: "relative" }}>
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-card-body">
              <div className="blog-meta fw-bold"style={{color:'darkblue'}}>
                📅 {post.date} &nbsp; | &nbsp; ✍️ {post.author}
              </div>
              <div className="blog-title">{post.title}</div>
              <div className="blog-text">
                Nam at scelerisque neque. Nunc et risus id nibh facilisis
                malesuada...
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
