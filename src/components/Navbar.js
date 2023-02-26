import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5 bg-orange-600">
      <div className="container mx-auto flex justify-between items-center  text-white ">
        <div className="text-xl">
          <Link to="/">
            Orphan
            <span className="italic text-2xl font-semibold text-orange-900">
              Life
            </span>
          </Link>
        </div>

        <ul className="flex gap-4 uppercase">
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

        <div className="bg-white text-orange-600 py-2 px-6 rounded-sm hover:bg-orange-600 hover:text-white duration-300">
          <a href="#" className="uppercase">
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
