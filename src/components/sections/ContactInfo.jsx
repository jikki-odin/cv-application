export default function ContactInfo() {
  return (
    <form>
      <div>
        <label for="name">Name:</label>
        <input name="name"></input>
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input name="phone"></input>
      </div>
      <div>
        <label for="email">Email Address:</label>
        <input type="email" name="email"></input>
      </div>
    </form>
  );
}
