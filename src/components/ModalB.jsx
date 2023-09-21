// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ModalB = ({ onClose, onlyEvenChecked }) => {
//   const [usContacts, setUSContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const allContactsResponse = await axios.get(
//           "https://contact.mediusware.com/api/contacts/"
//         );

//         const usContactsData = allContactsResponse.data.results.filter(
//           (contact) => contact.country.name === "United States"
//         );

//         setUSContacts(usContactsData);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>US Contacts</h2>
//       <ul>
//         {usContacts.map((contact) => (
//           <li key={contact.id}>
//             <strong>Contact ID:</strong> {contact.id}
//             <br />
//             <strong>Name:</strong> {contact.name}
//             <br />
//             <strong>Phone:</strong> {contact.phone}
//             <br />
//             <strong>Country:</strong> {contact.country.name}
//           </li>
//         ))}
//       </ul>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// export default ModalB;

import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalB = ({ onClose, onAllContactsClick, onlyEvenChecked }) => {
  const [usContacts, setUSContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all contacts from the "All Contacts" API
        const allContactsResponse = await axios.get(
          "https://contact.mediusware.com/api/contacts/"
        );

        // Filter contacts to include only those with the country name 'US'
        const usContactsData = allContactsResponse.data.results.filter(
          (contact) => contact.country.name === "United States"
        );

        setUSContacts(usContactsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-center mt-3">US Contacts</h2>
      <ul className="list-group">
        {usContacts.map((contact) => (
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
        onClick={onAllContactsClick}
        className="btn btn-custom mt-3"
        style={{ backgroundColor: "#ff7f50", border: "none", color: "white" }}
      >
        All Contacts
      </button>
      <button className="btn btn-primary mt-3" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ModalB;
