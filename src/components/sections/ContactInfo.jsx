export default function ContactInfo({
  editing,
  contactInfo,
  onNameChange,
  onPhoneChange,
  onEmailChange,
}) {
  const { name, phone, email } = contactInfo;

  // TODO: line up form inputs with data type (e.g. phone)
  return (
    <form>
      <div>
        <label for="name">Name: </label>
        {editing ? (
          <input name="name" value={name} onChange={onNameChange}></input>
        ) : (
          name
        )}
      </div>
      <div>
        <label for="phone">Phone: </label>
        {editing ? (
          <input name="phone" value={phone} onChange={onPhoneChange}></input>
        ) : (
          phone
        )}
      </div>
      <div>
        <label for="email">Email Address: </label>
        {editing ? (
          <input
            type="email"
            name="email"
            value={email}
            onChange={onEmailChange}
          ></input>
        ) : (
          email
        )}
      </div>
    </form>
  );
}
