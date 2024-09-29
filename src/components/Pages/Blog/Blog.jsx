import { useState } from "react";
import blog from "../../../../Data/blog";
import "./blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogData, setBlogData] = useState(blog);
  return (
    <div className="blog">
      {blogData.map((item) => {
        return (
          <Link to={`/blogDetail/${item.id}`} key={item.id} className="cardBlog" >
            <div className="imgBlog">
              <img src={item.img} alt="img" />
            </div>
            <h3>{item.title}</h3>
            <p style={{fontSize:"12px" , color:"gray"}}>{item.description}</p>
            <button>خواندن</button>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
