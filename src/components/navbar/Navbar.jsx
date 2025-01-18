import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import github from "/github-mark-white.png"
import instagram from "/instagram.png"
import linkedin from "/linkedin-white.png"
import telegram from "/telegram.png"
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
            <img src={github} alt="" />
          </a>
          <a href="https://www.instagram.com/sagynbayev/">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sagynbayev/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://t.me/sagynbayevv">
            <img src={telegram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
