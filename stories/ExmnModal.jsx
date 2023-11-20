import React, { useState } from "react";
import Modal from "react-modal";
import './ExmnModal.css';
export const ExmnModal = ({Titulo,Cont}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
     <button onClick={handleOpenModal}>ABRIR</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className="modalven"
       

      >
        <div className="caja">
         <div className="titulo">
        <h2>{Titulo}</h2>
        
      </div>
      <div className="contenido">
        <p>{Cont}</p>
        
      </div>
        <button onClick={handleCloseModal}>CERRAR</button>
        </div>
      </Modal>
    </>
  );
};
