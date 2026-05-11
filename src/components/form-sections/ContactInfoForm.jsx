export default function ContactInfoForm({
  contactInfo,
  onNameChange,
  onPhoneChange,
  onEmailChange,
}) {
  const { name, phone, email } = contactInfo;

  return (
    <form>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={onPhoneChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
    </form>
  );
}
