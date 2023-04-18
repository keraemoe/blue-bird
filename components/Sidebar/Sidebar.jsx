import React from "react";
import s from "./Sidebar.module.scss";
import cl from "classnames";
import { motion } from "framer-motion";

const Sidebar = ({ show, setShowNav }) => {

  return (
    <motion.div
      initial={{
        x: "100%",
        opacity: 0,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["100%", "100%", "50%", "50%", "0"],
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        borderRadius: 0,
        type: "spring",
        stiffness: 500,
      }}
      transition={{ delay: 0.2, duration: 1 }}
      className={show ? cl(s.sidenav, s.active) : s.sidenav}
    >
      <div onClick={() => setShowNav(false)} className={s.circle}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.9404 4.05835C14.2282 4.3461 14.2282 4.81264 13.9404 5.1004L5.09832 13.9425C4.81057 14.2303 4.34402 14.2303 4.05627 13.9425C3.76852 13.6547 3.76852 13.1882 4.05627 12.9005L12.8984 4.05835C13.1861 3.77059 13.6527 3.77059 13.9404 4.05835Z"
            fill="white"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.05627 4.05835C4.34402 3.77059 4.81057 3.77059 5.09832 4.05835L13.9404 12.9005C14.2282 13.1882 14.2282 13.6547 13.9404 13.9425C13.6527 14.2303 13.1861 14.2303 12.8984 13.9425L4.05627 5.1004C3.76852 4.81264 3.76852 4.3461 4.05627 4.05835Z"
            fill="white"
          ></path>
        </svg>
      </div>

      <ul>
        <motion.li
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.7 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#aboutUs" onClick={() => setShowNav(false)}>
            О компании
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#events" onClick={() => setShowNav(false)}>
            Галерея
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#news" onClick={() => setShowNav(false)}>
            Анонсы
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -20, opacity: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          whileHover={{ scale: 1.1, transition: "0" }}
        >
          <a href="#footer" onClick={() => setShowNav(false)}>
            Контакты
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
