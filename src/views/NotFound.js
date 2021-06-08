import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Page not found</h2>
      <p>Page that you are looking for does not exists.</p>
      <Link to="/">Go back home...</Link>
    </div>
  );
};

export default NotFound;
