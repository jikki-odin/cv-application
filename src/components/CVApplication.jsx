import ContactInfo from "./sections/ContactInfo";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";
import Section from "./Section";

export default function CVApplication() {
  return (
    <>
      <Section title="Contact Info">
        <ContactInfo />
      </Section>
      <Section title="Education">
        <Education />
      </Section>
      <Section title="WorkExperience">
        <WorkExperience />
      </Section>
    </>
  );
}
