import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id}>
          <div className="blog-preview">
            <h2 className="blog-preview__title">{blog.title}</h2>
            <p>{blog.author}</p>
            <p>{blog.body.slice(0, 200)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
