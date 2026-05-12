import Section from "../Section";
import Education from "./Education";

export default function EducationGroup({ educationPrograms }) {
  return (
    <Section title="Education">
      {educationPrograms.map((program) => (
        <Education education={program} />
      ))}
    </Section>
  );
}
