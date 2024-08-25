import React from "react";
import "./Modal.css";

function Modal({ src, isVideo, closeModal, title, description }) {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          {isVideo ? (
            <video src={src} controls autoPlay />
          ) : (
            <img src={src} alt="Modal Content" />
          )}
        </div>
        <div className="modal-text">
          <h1>
            <i className="fas fa-map-marker-alt"></i> {/* Ikon Lokasi */}
            {title}
          </h1>
          <p>{description}</p>
        </div>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
      </div>
    </div>
  );
}

export default Modal;
