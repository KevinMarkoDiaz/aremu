import React from "react";
import { Link } from "react-router-dom";

const Card = ({ children, price, title }: any) => {
  return (
    <div className="flex flex-col md:w-1/5 max-md:h-dvh	text-center	h-fit ">
      {children}
      <p className="font-semibold text-lg"> {title}</p>
      <p>{price}</p>
      <Link to={`/products/${title}`}>Detalles</Link>
    </div>
  );
};

export default Card;
