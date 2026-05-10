import Section from "../Section";

export default function ContactInfo({ contactInfo }) {
  const { name, phone, email } = contactInfo;

  return (
    <Section title="ContactInfo">
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </Section>
  );
}
