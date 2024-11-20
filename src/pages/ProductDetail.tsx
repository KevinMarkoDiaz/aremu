import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../mock/data";

// Componente ProductDetail que muestra todos los detalles del producto
const ProductDetail: React.FC = () => {
  const { productName } = useParams<{ productName: string }>(); // Obtener el nombre del producto desde la URL
  const navigate = useNavigate(); // Para navegar a otra página

  // Buscar el producto correspondiente en el array
  const product = productsData.find(
    (item) => item.title.toLowerCase() === productName?.toLowerCase()
  );

  if (!product) {
    // Si no se encuentra el producto, muestra un mensaje o redirige
    return (
      <div>
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate("/products")}>
          Volver a la lista de productos
        </button>
      </div>
    );
  }

  return (
    <div
      className="flex w-screen md:h-screen justify-around max-md:flex-col
    "
    >
      <div className="md:w-2/5 ">
        <img
          src={product.src}
          alt={product.title}
          className="w-full self-center"
        />
      </div>
      <div className="md:w-2/5 self-center grid gap-8 max-md:p-8">
        <h1 className=" text-3xl">{product.title}</h1>
        <div className="grid gap-2">
          <p>Precio: {product.price}</p>
          <p>Descripción: {product.description}</p>
          <p>Descripción extendida: {product.extendedDescription}</p>
          <p>Ingredientes: {product.ingredients.join(", ")}</p>
          <p>Preparación: {product.preparation}</p>
        </div>
        <button onClick={() => navigate("/products")}>
          Volver a la lista de productos
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
