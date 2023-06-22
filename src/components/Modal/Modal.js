import React from "react";
import "./Modal.css";
import { Modal } from "react-bootstrap";
import PdfViewer from "../pdfViewer/PdfViewer";
function Modals({ handleCloseModal, showModal,currentCv }) {
  return (
    <Modal size="lg" style={{width:"100%"}} show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Müraciət edənin Cv-si</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
            currentCv? <PdfViewer fileUrl = {currentCv} />:"Cv elcatan deyil"
        }
        
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleCloseModal}>Bağla</button>
      </Modal.Footer>
    </Modal>
  );
}
export default Modals;
