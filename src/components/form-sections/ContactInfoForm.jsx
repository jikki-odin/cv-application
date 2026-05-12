export default function ContactInfoForm({ contactInfo, onChange }) {
  const { name, phone, email } = contactInfo;

  function handleNameChange(e) {
    onChange({
      ...contactInfo,
      name: e.target.value,
    });
  }

  function handlePhoneChange(e) {
    onChange({
      ...contactInfo,
      phone: e.target.value,
    });
  }

  function handleEmailChange(e) {
    onChange({
      ...contactInfo,
      email: e.target.value,
    });
  }

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
            onChange={handleNameChange}
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
            onChange={handlePhoneChange}
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
            onChange={handleEmailChange}
          />
        </label>
      </div>
    </form>
  );
}
