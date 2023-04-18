import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import cn from "classnames";
import ModalConnect from "../Modal/ModalConnect";
import Image from "next/image";
import logo from "../../public/logo.svg";
import logo1 from "../../public/logo1.svg";

const Header = () => {
  // State - для header
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const [showNav, setShowNav] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // Function - для header (при скролле)
  useEffect(() => {
    function handleScroll() {
      setIsHeaderActive(window.pageYOffset > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const styleText = {
    black: "black",
    white: "white",
  };

  return (
    <>
      <header
        className={
          isHeaderActive
            ? cn(s.header_main, s.header_main_active)
            : s.header_main
        }
      >
        <div className={s.header_content}>
          <ul className={s.header_navbar}>
            <li>
              <a
              className={s.nav_link}
                href="#aboutUs"
                style={{
                  color: styleText.white
                }}
              >
                О нас
              </a>
            </li>
            <li>
              <a
               className={s.nav_link}
                href="#events"
                style={{
                  color: styleText.white
                }}
              >
                Галерея
              </a>
            </li>
            <li>
              <a
               className={s.nav_link}
                href="#news"
                style={{
                  color: styleText.white
                }}
              >
                Анонсы
              </a>
            </li>
            <li>
              <a
               className={s.nav_link}
                href="#footer"
                style={{
                  color: styleText.white
                }}
              >
                Контакты
              </a>
            </li>
          </ul>
          {/* header_navbar */}

          <Image
            className={s.header_logo}
            src={logo1 }
            alt="logo"
          />
          <div className={s.header_btn_burger}>
            <button
              style={{
                color: styleText.white
              }}
              onClick={() => setShowModal(true)}
              className={s.header_btn}
            >
              Оставить заявку
            </button>
            {showModal == true ? (
              <ModalConnect setShowModal={setShowModal} showModal={showModal} />
            ) : (
              ""
            )}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, duration: 0.5 }}
              className={s.burger_menu}
            >
              <div className={s.nav_icon} onClick={() => setShowNav(!showNav)}>
                <span style={{background: styleText.white}} ></span>
                <span style={{background: styleText.white}} ></span>
                <span style={{background: styleText.white}} ></span>
              </div>
            </motion.div>
            {/* burger_menu */}
          </div>
          {/* header_btn_burger */}
        </div>
        {/* header_content */}
      </header>
      {/* header_main */}

      {showNav && <Sidebar show={showNav} setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
