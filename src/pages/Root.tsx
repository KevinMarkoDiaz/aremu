import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

const Root = () => {
  return (
    <div>
      <Layout>
        <Header></Header>
        <Outlet></Outlet>
      </Layout>
    </div>
  );
};

export default Root;
