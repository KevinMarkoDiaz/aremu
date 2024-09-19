import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/home">home</Link>
          <Link to="/contact">Contactanos</Link>
          <Link to="/about">Nuestra historia</Link>
          <Link to="/products">Productos</Link>
        </nav>
      </Header>
      <Outlet></Outlet>
      <Footer>
        <nav>
          <Link to="/home">home</Link>
          <Link to="/contact">Contactanos</Link>
          <Link to="/about">Nuestra historia</Link>
          <Link to="/products">Productos</Link>
        </nav>
      </Footer>
    </div>
  );
};

export default Root;
