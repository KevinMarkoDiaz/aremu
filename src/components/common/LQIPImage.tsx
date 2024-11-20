import React, { useState } from "react";

// Definir los tipos para las propiedades del componente
interface LQIPImageProps {
  classnames: string;
  lowRes: string; // Ruta de la imagen de baja resolución
  highRes: string; // Ruta de la imagen de alta resolución
  alt: string; // Texto alternativo para la imagen
}

const LQIPImage: React.FC<LQIPImageProps> = ({
  classnames,
  lowRes,
  highRes,
  alt,
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <img
      className={classnames}
      src={imageLoaded ? highRes : lowRes}
      alt={alt}
      onLoad={handleImageLoad}
      style={{
        transition: "opacity 100ms ease",
        opacity: imageLoaded ? 1 : 0.7,
      }}
    />
  );
};

export default LQIPImage;
