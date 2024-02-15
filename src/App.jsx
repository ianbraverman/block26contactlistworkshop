import { useState } from "react";
import { useEffect } from "react";
import SetInformation from "./contactinformation/SetInformation";
import TheSelectedContact from "./contactinformation/TheSelectedContact";

function App() {
  const [contacts, setTheContacts] = useState([
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const API_URL =
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";
      const response = await fetch(API_URL);
      const parsedResponse = await response.json();
      setTheContacts(parsedResponse);
    };
    fetchContactInfo();
  }, []);

  return (
    <>
      <table>
        <caption>Contact List</caption>
        {selectedContact ? (
          <TheSelectedContact
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        ) : (
          <>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            <SetInformation
              contacts={contacts}
              setSelectedContact={setSelectedContact}
            />
          </>
        )}
      </table>
    </>
  );
}

export default App;
