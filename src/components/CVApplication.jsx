import { useState } from "react";

import ContactInfo from "./sections/ContactInfo";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";
import Section from "./Section";
import applicant from "../data";

export default function CVApplication() {
  const [editing, setEditing] = useState(false);

  function handleClick() {
    setEditing(!editing);
  }

  const { contactInfo, education, workExperience } = applicant;

  return (
    <>
      <Section title="Contact Info">
        <ContactInfo editing={editing} contactInfo={contactInfo} />
      </Section>
      <Section title="Education">
        <Education editing={editing} education={education} />
      </Section>
      <Section title="WorkExperience">
        <WorkExperience editing={editing} workExperience={workExperience} />
      </Section>
      <button type="submit" onClick={handleClick}>
        {editing ? "Save" : "Edit"}
      </button>
    </>
  );
}
