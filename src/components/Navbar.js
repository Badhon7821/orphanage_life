import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link to="/">
          Orphan<span>Life</span>
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <a href="#">Donate Now</a>
    </div>
  );
};

export default Navbar;
