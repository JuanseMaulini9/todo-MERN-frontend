import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-main-gray w-full fixed top-0">
      <ul className="flex gap-3 justify-end mr-4 h-10 items-center font-bold text-xl">
        <li className="hover:underline">  
          <Link to="/signup">Signup</Link>
        </li>
        <li className="hover:underline">  
          <Link to="/login">Login</Link>
        </li>
        <li className="hover:underline">  
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

