import React from "react";
import Card from "../components/common/Card";
import { productsData } from "../mock/data";

const Products: React.FC = () => {
  return (
    <div className="flex justify-around w-full md:h-screen items-center max-md:flex-col  max-md:pt-16">
      {productsData.map((product, index) => (
        <Card key={index} title={product.title} price={product.price}>
          <img className={"w-full"} src={product.src} alt={product.title} />
        </Card>
      ))}
    </div>
  );
};

export default Products;
