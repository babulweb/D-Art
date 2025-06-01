// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">
        <Link to="/">InteriorVision</Link>
      </div>

      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-1.5 rounded-lg hover:bg-gray-800"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
