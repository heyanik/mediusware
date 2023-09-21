import React from "react";

const ModalC = ({ contact, onClose }) => {
  // Render contact details here
  return (
    <div>
      <h2>Contact Details</h2>
      <p>Contact ID: {contact.id}</p>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <p>Country: {contact.country.name}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalC;
