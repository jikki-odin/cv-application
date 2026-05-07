// import { useState } from "react";

import ContactInfo from "./sections/ContactInfo";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";
import Section from "./Section";

export default function CVApplication() {
  const editing = false;
  // const [editing, setEditing] = useState(true);

  return (
    <>
      <Section title="Contact Info">
        <ContactInfo editing={editing} />
      </Section>
      <Section title="Education">
        <Education editing={editing} />
      </Section>
      <Section title="WorkExperience">
        <WorkExperience editing={editing} />
      </Section>
      <button type="submit">Save</button>
    </>
  );
}
