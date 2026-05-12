export default function ContactInfoForm({ contactInfo, onChange }) {
  const { name, phone, email } = contactInfo;

  function handleChange(e) {
    onChange({
      ...contactInfo,
      [e.target.name]: e.target.value,
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
}
