import Section from "../Section";

export default function Education({
  schoolName,
  titleOfStudy,
  graduationDate,
}) {
  return (
    <Section title="Education">
      <p>School: {schoolName}</p>
      <p>Title of Study: {titleOfStudy}</p>
      <p>Graduated: {graduationDate}</p>
    </Section>
  );
}
