import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importamos el ícono de WhatsApp
import "./ContactButton.css";
const ContactButton: React.FC = () => {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/17864196666?text=¡Hola!%20Estoy%20interesado%20en%20tu%20producto."
      target="_blank" // Para abrir en una nueva pestaña
      rel="noopener noreferrer" // Mejorar la seguridad al abrir enlaces externos
      className="whatsapp-link" // Clase para agregar los estilos
    >
      <FaWhatsapp size={40} color="#fff" />
    </a>
  );
};

export default ContactButton;
