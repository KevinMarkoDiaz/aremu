import React from "react";
import BANNER from "../assets/banner3.jpg";
import BANNER_LQ from "../assets/banner3_LQ.jpg";

import LQIPImage from "../components/common/LQIPImage";

const AboutUs = () => {
  return (
    <div className="flex max-md:flex-col md:min-h-screen">
      <LQIPImage
        classnames="max-md:h-fit md:w-2/5 object-cover "
        lowRes={BANNER_LQ}
        highRes={BANNER}
        alt="banner"
      />
      <div className="flex flex-col gap-8 max-md:p-12 md:p-32 self-center">
        <div className=" grid gap-8 ">
          <p className="font-semibold text-3xl tracking-wider">
            Nuestra historia
          </p>
          <p>
            Desde hace más de 40 años, esta empresa colombiana ha hecho más que
            preservar una tradición culinaria. Con un compromiso inquebrantable
            con la calidad, se especializa en la producción de productos a base
            de maíz, fusionando la sabiduría ancestral con los más altos
            estándares de calidad. Cada uno de sus productos refleja la esencia
            de Colombia, siendo el resultado de una cuidadosa selección de
            ingredientes y un proceso de elaboración que prioriza la salud y el
            bienestar. Reconocida y apreciada en todo el país, sus productos se
            han convertido en sinónimo de confianza, sabor auténtico y nutrición
            de primera.
          </p>
        </div>

        <div className=" grid gap-8">
          <p className="font-semibold text-xl">
            Estamos trayendo lo mejor de Colombia a Estados Unidos, compartiendo
            un pedazo de nuestra rica cultura a través de nuestros productos.
            Cada bocado refleja el sabor auténtico de nuestra gastronomía,
            llevando la calidad y los sabores únicos de Colombia a nuevos
            hogares y corazones.
          </p>
          <p>
            Nuestros productos ofrecen lo mejor de la naturaleza, con
            ingredientes frescos y completamente naturales, garantizando
            alimentos deliciosos y nutritivos. Nos comprometemos a ofrecer
            opciones saludables que nutren el cuerpo y el alma, manteniendo
            siempre su frescura y autenticidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
