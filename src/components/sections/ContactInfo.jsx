export default function ContactInfo({ editing, contactInfo }) {
  const { name, phone, email } = contactInfo;

  return (
    <form>
      <div>
        <label for="name">Name: </label>
        {editing ? <input name="name" value={name}></input> : name}
      </div>
      <div>
        <label for="phone">Phone: </label>
        {editing ? <input name="phone" value={phone}></input> : phone}
      </div>
      <div>
        <label for="email">Email Address: </label>
        {editing ? (
          <input type="email" name="email" value={email}></input>
        ) : (
          email
        )}
      </div>
    </form>
  );
}
