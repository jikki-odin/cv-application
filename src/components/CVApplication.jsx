import { useState } from "react";

import ContactInfo from "./sections/ContactInfo";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";
import Section from "./Section";

export default function CVApplication() {
  const [editing, setEditing] = useState(true);

  function handleClick() {
    setEditing(!editing);
  }

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
      <button type="submit" onClick={handleClick}>
        {editing ? "Save" : "Edit"}
      </button>
    </>
  );
}
