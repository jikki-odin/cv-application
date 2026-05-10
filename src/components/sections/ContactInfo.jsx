import Section from "../Section";

export default function ContactInfo({ name, phone, email }) {
  return (
    <Section title="ContactInfo">
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </Section>
  );
}
