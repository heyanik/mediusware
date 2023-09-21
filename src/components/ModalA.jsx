import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalA = ({ onClose, onUSContactsClick, onlyEvenChecked }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://contact.mediusware.com/api/contacts/"
        );
        setContacts(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("contacts:", contacts);
  console.log("loading:", loading);
  console.log("error:", error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-center mt-3">All Contacts</h2>
      <ul className="list-group">
        {contacts.map((contact) => (
          <li key={contact.id} className="list-group-item">
            <strong>Contact ID:</strong> {contact.id}
            <br />
            <strong>Name:</strong> {contact.name}
            <br />
            <strong>Phone:</strong> {contact.phone}
            <br />
            <strong>Country:</strong> {contact.country.name}
          </li>
        ))}
      </ul>
      <button
        onClick={onUSContactsClick}
        className="btn btn-custom mt-3"
        style={{ backgroundColor: "#46139f", border: "none", color: "white" }}
      >
        US Contacts
      </button>
      <button onClick={onClose} className="btn btn-primary mt-3">
        Close
      </button>
    </div>
  );
};

export default ModalA;
