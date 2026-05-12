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
        <label htmlFor="name">
          Name:{" "}
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={onNameChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="phone">
          Phone:{" "}
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={onPhoneChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email Address:{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onEmailChange}
          />
        </label>
      </div>
    </form>
  );
}
