import { useParams, useHistory } from "react-router-dom";
import useFetch from "../api/useFetch";
import Loader from "../atoms/Loader";

const BlogDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8000/blogs/${id}`;
  const { data: blog, error, isPending } = useFetch(url);
  const history = useHistory();

  const handleClick = () => {
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div> {error} </div>}
      {isPending && <Loader />}
      {blog && (
        <article className="blog-details__article">
          <h2 className="blog-details__article__header">{blog.title}</h2>
          <p className="blog-details__article__author">
            Writteb by: {blog.author}
          </p>
          <div className="blog-details__article__body">{blog.body}</div>
          <button onClick={handleClick}>Delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
