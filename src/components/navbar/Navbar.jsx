import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sagynbayev Almaz
        </motion.span>
        <div className="social">
          <a href="https://github.com/sagynbayev">
            <img src="/github-mark-white.png" alt="" />
          </a>
          <a href="https://www.instagram.com/sagynbayev/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sagynbayev/">
            <img src="/linkedin-white.png" alt="" />
          </a>
          <a href="https://t.me/sagynbayevv">
            <img src="/telegram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
