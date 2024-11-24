import React from "react";
import "./Home.css";
import BANNER_AREPA from "../assets/bannerArepa.jpg";
import BANNER_AREPA_LQ from "../assets/bannerArepa_LQ.jpg";

import BANNER_AREPA_WIDE from "../assets/bannerArepaWide.jpg";
import BANNER_AREPA_WIDE_LQ from "../assets/bannerArepaWide_LQ.jpg";

import AD_QUESO from "../assets/ADQueso.jpg";
import A_PAISA from "../assets/APaisa.jpg";
import E_QUESO from "../assets/EQueso.jpg";
import LQIPImage from "../components/common/LQIPImage";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className={"overflow-hidden md:min-h-screen items-center flex"}>
        <LQIPImage
          lowRes={BANNER_AREPA_WIDE_LQ}
          highRes={BANNER_AREPA_WIDE}
          alt="banner"
          classnames=" h-dvh w-full object-cover max-md:hidden"
        />
        <LQIPImage
          lowRes={BANNER_AREPA_LQ}
          highRes={BANNER_AREPA}
          alt="banner"
          classnames=" h-fit w-full object-cover md:hidden"
        />
      </div>
      <div className="p-8 grid gap-8 items-center">
        <div className="grid text-center gap-8">
          <p className="font-semibold text-2xl">
            Solo los ingredientes de más alta calidad
          </p>
          <p>
            ¡De hecho, producimos la mayoría de nuestros productos a base de
            maíz utilizando métodos tradicionales y con un compromiso total con
            la calidad y la frescura!
          </p>
        </div>
        <div className="grid gap-16 md:grid-cols-3">
          <img
            loading="lazy"
            className={"w-full"}
            src={AD_QUESO}
            alt="banner"
          ></img>
          <img
            loading="lazy"
            className={"w-full"}
            src={A_PAISA}
            alt="banner"
          ></img>
          <img
            loading="lazy"
            className={"w-full"}
            src={E_QUESO}
            alt="banner"
          ></img>
        </div>
        <Link
          to="/contact"
          className="bg-[#94c11f] text-white justify-self-center font-semibold p-4 w-fit"
        >
          Comprar ahora
        </Link>
      </div>
    </div>
  );
};

export default Home;
