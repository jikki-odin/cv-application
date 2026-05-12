import { useState } from "react";

import ContactInfoForm from "./form-sections/ContactInfoForm";
import EducationForm from "./form-sections/EducationForm";
import WorkExperienceForm from "./form-sections/WorkExperienceForm";
import Section from "./Section";

export default function CVEditForm({ applicant, onSave }) {
  const [contactInfo, setContactInfo] = useState(applicant.contactInfo);
  const [education, setEducation] = useState(applicant.education);
  const [workExperience, setWorkExperience] = useState(
    applicant.workExperience,
  );

  function submitNewApplicant() {
    onSave({
      contactInfo,
      education,
      workExperience,
    });
  }

  function handleContactInfoChange(newContactInfo) {
    setContactInfo(newContactInfo);
  }

  function handleEducationChange(newEducation) {
    setEducation(newEducation);
  }

  function handleWorkExperienceChange(newWorkExperience) {
    setWorkExperience(newWorkExperience);
  }

  return (
    <>
      <Section title="Contact Info">
        <ContactInfoForm
          contactInfo={contactInfo}
          onChange={handleContactInfoChange}
        />
      </Section>
      <Section title="Education">
        <EducationForm education={education} onChange={handleEducationChange} />
      </Section>
      <Section title="Work Experience">
        <WorkExperienceForm
          workExperience={workExperience}
          onChange={handleWorkExperienceChange}
        />
      </Section>
      <button type="submit" onClick={submitNewApplicant}>
        Save
      </button>
    </>
  );
}
