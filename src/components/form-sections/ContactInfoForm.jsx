export default function ContactInfoForm({
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
        <label htmlFor="name">Name: </label>
        <input name="name" value={name} onChange={onNameChange} />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input name="phone" value={phone} onChange={onPhoneChange} />
      </div>
      <div>
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
    </form>
  );
}
