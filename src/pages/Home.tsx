import React from "react";
import "./Home.css";
import BANNER_AREPA from "../assets/bannerArepa.jpg";
import BANNER_AREPA_WIDE from "../assets/bannerArepaWide.jpg";

const Home = () => {
  return (
    <div className="">
      <div className={"overflow-hidden h-dvh items-center flex"}>
        <img
          className={" h-dvh w-full object-cover md:hidden"}
          src={BANNER_AREPA}
          alt="banner"
        ></img>
        <img
          className={" h-dvh w-full object-cover max-md:hidden"}
          src={BANNER_AREPA_WIDE}
          alt="banner"
        ></img>
      </div>
      Home
    </div>
  );
};

export default Home;
