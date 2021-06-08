import useFetch from "../api/useFetch";
import BlogList from "../atoms/BlogList";
import Loader from "../atoms/Loader";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <Loader />}
      {!isPending && !error && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
