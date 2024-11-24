import AD_QUESO from "../assets/ADQueso.jpg";
import A_PAISA from "../assets/APaisa.jpg";
import E_QUESO from "../assets/EQueso.jpg";

// Array de productos con la información solicitada
export const productsData = [
  {
    title: "Arepa de queso",
    price: "12$",
    description: "Deliciosa arepa rellena de queso fresco y suave",
    extendedDescription:
      "Una arepa gruesa, suave y deliciosa, rellena con queso fresco derretido y suave al gusto. Ideal para el desayuno.",
    ingredients: ["Arepa", "Queso fresco", "Aceite"],
    preparation:
      "Cocinar la arepa en un sartén caliente hasta dorarse, luego agregar el queso y calentar hasta que se derrita.",
    src: AD_QUESO, // Imagen importada
  },
  {
    title: "Empanada de queso",
    price: "12$",
    description: "Empanada crujiente rellena con queso derretido y sabroso",
    extendedDescription:
      "Empanada frita, crujiente por fuera y suave por dentro, con queso derretido que le da un toque único de sabor.",
    ingredients: ["Masa", "Queso", "Aceite"],
    preparation:
      "Formar las empanadas, rellenarlas con queso y freírlas hasta que estén doradas y crujientes.",
    src: E_QUESO, // Imagen importada
  },
  {
    title: "Arepa paisa",
    price: "12$",
    description: "Arepa típica de la región paisa, con carne, queso y más",
    extendedDescription:
      "Una arepa rellena de carne, queso y otros ingredientes típicos de la región paisa. Sabor auténtico y tradicional.",
    ingredients: ["Arepa", "Carne molida", "Queso", "Aceite", "Cebolla"],
    preparation:
      "Cocinar la carne molida con cebolla, rellenar la arepa con carne y queso, luego calentarla hasta que esté dorada.",
    src: A_PAISA, // Imagen importada
  },
];