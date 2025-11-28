import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow mb-8"
    >
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          JobPortal
        </Link>

        <nav className="space-x-6 text-gray-700 font-medium">
          <Link className="hover:text-blue-600" to="/">Home</Link>
          <Link className="hover:text-blue-600" to="/post">Post Job</Link>
          <a href="/applications" className="nav-link">Admin Dashboard</a>
        </nav>
      </div>
    </motion.header>
  );
}
