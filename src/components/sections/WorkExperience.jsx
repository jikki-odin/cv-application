import Section from "../Section";

export default function WorkExperience({
  companyName,
  positionTitle,
  startDate,
}) {
  return (
    <Section title="WorkExperience">
      <p>Company: {companyName}</p>
      <p>Position: {positionTitle}</p>
      <p>Started: {startDate}</p>
    </Section>
  );
}
