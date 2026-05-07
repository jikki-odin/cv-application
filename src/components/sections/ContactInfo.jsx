export default function ContactInfo({ editing }) {
  const name = "John Smith";
  const phoneNumber = "1234567890";
  const emailAddress = "hello@world.com";

  return (
    <form>
      <div>
        <label for="name">Name: </label>
        {editing ? <input name="name"></input> : name}
      </div>
      <div>
        <label for="phone">Phone: </label>
        {editing ? <input name="phone"></input> : phoneNumber}
      </div>
      <div>
        <label for="email">Email Address: </label>
        {editing ? <input type="email" name="email"></input> : emailAddress}
      </div>
    </form>
  );
}
