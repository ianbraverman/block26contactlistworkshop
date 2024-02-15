export default function SetInformation({ contacts, setSelectedContact }) {
  return (
    <tbody>
      {contacts.map((contact) => (
        <tr onClick={() => setSelectedContact(contact)} key={contact.id}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      ))}
    </tbody>
  );
}
