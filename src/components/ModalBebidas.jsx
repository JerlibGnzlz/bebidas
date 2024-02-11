import { Modal, Image } from "react-bootstrap";
import { useBebidas } from "../hooks/useBebidas";


const ModalBebidas = () => {


  const { modal, handleModalClick } = useBebidas();


  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>
        cuerpo del modal
      </Modal.Body>
    </Modal>
  );
};

export default ModalBebidas;
