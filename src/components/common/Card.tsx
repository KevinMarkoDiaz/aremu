import React from "react";
import { Link } from "react-router-dom";

const Card = ({ children, description, title }: any) => {
  return (
    <div className="flex flex-col md:w-1/5 max-md:h-dvh	text-center	h-fit hover:shadow-md ">
      <Link to={`/products/${title}`}>
        {children}
        <div className="p-2 grid gap-4">
          <p className="font-semibold text-lg"> {title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
