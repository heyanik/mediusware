import React, { useState } from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";

const Problem2 = () => {
  const [isModalAOpen, setIsModalAOpen] = useState(false);
  const [isModalBOpen, setIsModalBOpen] = useState(false);
  const [onlyEvenChecked, setOnlyEvenChecked] = useState(false);

  const openModalA = () => {
    setIsModalAOpen(true);
    setIsModalBOpen(false);
  };

  const openModalB = () => {
    setIsModalAOpen(false);
    setIsModalBOpen(true);
  };

  const closeModal = () => {
    setIsModalAOpen(false);
    setIsModalBOpen(false);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            onClick={openModalA}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            onClick={openModalB}
          >
            US Contacts
          </button>
        </div>
      </div>
      {isModalAOpen && (
        <ModalA
          onClose={closeModal}
          onUSContactsClick={openModalB}
          onlyEvenChecked={onlyEvenChecked}
        />
      )}
      {isModalBOpen && (
        <ModalB
          onClose={closeModal}
          onAllContactsClick={openModalA}
          onlyEvenChecked={onlyEvenChecked}
        />
      )}
    </div>
  );
};

export default Problem2;
