import Section from "../Section";

export default function WorkExperience({ workExperience }) {
  const { companyName, positionTitle, startDate } = workExperience;

  return (
    <Section title="WorkExperience">
      <p>Company: {companyName}</p>
      <p>Position: {positionTitle}</p>
      <p>Started: {startDate}</p>
    </Section>
  );
}
