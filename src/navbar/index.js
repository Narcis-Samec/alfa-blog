import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__header">The Alfa Blog</h1>
      <div className="navbar__links">
        <Link className="navbar__links__item" to="/">
          Home
        </Link>
        <Link className="navbar__links__item" to="/createBlog">
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
