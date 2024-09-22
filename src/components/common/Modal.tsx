import "./Modal.css"; // Estilo CSS para el modal

const Modal = ({ isOpen, onClose, children, classname }: any) => {
  if (!isOpen) return null;

  return (
    <div className={`${classname} modal-overlay`}>
      <div className="modal md:w-6/12 lg:w-3/12">
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
