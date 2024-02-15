export default function TheSelectedContact({
  selectedContact,
  setSelectedContact,
}) {
  return (
    <div>
      <li>Id: {selectedContact.id}</li>
      <li>Name: {selectedContact.name}</li>
      <li>Phone: {selectedContact.phone}</li>
      <li>Username: {selectedContact.username}</li>
      <li>Email: {selectedContact.email}</li>
      <li>Street: {selectedContact.address.street}</li>
      <li>Suite: {selectedContact.address.suite}</li>
      <li>City: {selectedContact.address.city}</li>
      <li>Zipcode: {selectedContact.address.zipcode}</li>
      <li>Latitude: {selectedContact.address.geo.lat}</li>
      <li>Longitude: {selectedContact.address.geo.lng}</li>
      <button onClick={() => setSelectedContact(null)}>ReturnToAll</button>
    </div>
  );
}
