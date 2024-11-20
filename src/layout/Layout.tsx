import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import LOGO from "../assets/icono-1.png";
import LOGO_FOOTER from "../assets/logo-3.png";

import "./Layout.css";
import HamburgerButton from "../components/common/HamburguerButton/HamburguerButton";
import Footer from "../components/footer/Footer";

const Layout = ({ children }: any) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      // Bloquear el scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restaurar el scroll
      document.body.style.overflow = "auto";
    }

    // Limpiar el estilo al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavOpen]);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <div className="poppins">
        <Navbar
          id="header"
          classname={` absolute p-6 md:px-6 md:px-14 flex-col	 z-10 text-black  grid-cols-3 md:grid-cols-3 flex justify-between md:grid gap-20 h-28 items-center w-screen transition-all duration-400  ease-in-out  ${
            isNavOpen ? "h-dvh bg-[#94c11f] text-[#006829]" : ""
          }`}
        >
          <div className="flex justify-between w-full 	md:order-2 ">
            <Link to="/home">
              <Navbar.Brand classname={"h-10 col-span-3 col-start-5 flex "}>
                <span className=" uppercase font-black leading-10 text-2xl mulish">
                  AREMU
                </span>
              </Navbar.Brand>
            </Link>

            {/* Botón de hamburguesa visible en pantallas pequeñas */}
            <div className="md:hidden flex col-span-1 col-start-4 justify-items-center place-content-center">
              <HamburgerButton onToggle={toggleNav} isNavOpen={isNavOpen} />
            </div>
          </div>
          <Navbar.Nav
            classname={`col-span-2 h-full flex items-center md: ${
              isNavOpen
                ? "order-3 -translate-y-6 transition-all ease-in-out duration-1000 text-[#006829]"
                : "translate-y-0 text-[#94c11f]"
            }`}
          >
            {isNavOpen ? (
              <ul className="flex  flex-col gap-4 text-3xl font-extralight text-center  ">
                <li className=" flex justify-center">
                  <img className="w-2/4" src={LOGO} alt="" />
                </li>
                <li>
                  <Link to="/home" onClick={toggleNav}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={toggleNav}>
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggleNav}>
                    Nuestra historia
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={toggleNav}>
                    Contactanos
                  </Link>
                </li>
              </ul>
            ) : (
              <></>
            )}
            <ul className="grid text-black h-full hidden md:flex gap-4 grid-cols-3">
              <li className=" place-content-center ">
                <Link to="/products">Productos</Link>
              </li>
              <li className="place-content-center ">
                <Link to="/about">Nuestra Historia</Link>
              </li>
              <li className=" place-content-center  ">
                <Link to="/contact">Contactanos</Link>
              </li>
            </ul>
          </Navbar.Nav>

          <Navbar.Sm
            classname={`col-start-7  order-3 md:flex ${
              isNavOpen ? "" : "max-md:hidden"
            }`}
          >
            <ul className="flex gap-8 text-xl	">
              <li>
                <a href="https://www.instagram.com/supercolombianafood/ ">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/supercolombianafood/">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </Navbar.Sm>
        </Navbar>
      </div>

      {children}
      <Footer
        classname={
          "bg-[#006829] text-white w-full p-6 md:px-16 flex md:flex-col justify-between md:gap-8"
        }
      >
        <Footer.Nav classname={"md:order-2"}>
          <ul className="flex h-full md:flex gap-2 flex-col text-nowrap text-left">
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/about">Nuestra Historia</Link>
            </li>
            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
          </ul>
        </Footer.Nav>
        <div className="flex justify-between flex-col">
          <Footer.Brand classname={"flex justify-center"}>
            <img className="w-2/4 md:w-2/12" src={LOGO_FOOTER} alt="logo" />
          </Footer.Brand>
          <Footer.ScMedia classname={"flex flex-col "}>
            <ul className="flex gap-8 text-lg 	max-md:justify-center">
              <li>
                <a href="https://www.instagram.com/supercolombianafood/ ">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/supercolombianafood/">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </Footer.ScMedia>
        </div>
      </Footer>
    </div>
  );
};

export default Layout;
