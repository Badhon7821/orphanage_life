import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5 bg-orange-600">
      <div className="container mx-auto flex justify-between items-center  text-white ">
        <div className="text-xl">
          <Link className="link" to="/">
            Orphan
            <span className="italic text-2xl font-semibold text-orange-900">
              Life
            </span>
          </Link>
        </div>

        <ul className="flex gap-4 uppercase">
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className=" py-2 px-6 rounded-sm border-2 hover:bg-white hover:text-orange-600 duration-300 cursor-pointer border-white hover:border-2">
          <a href="#" className="uppercase">
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
