import Section from "../Section";

export default function Education({ education }) {
  const { schoolName, titleOfStudy, graduationDate } = education;

  return (
    <Section title="Education">
      <p>School: {schoolName}</p>
      <p>Title of Study: {titleOfStudy}</p>
      <p>Graduated: {graduationDate}</p>
    </Section>
  );
}
