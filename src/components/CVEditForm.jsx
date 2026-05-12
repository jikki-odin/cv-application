import { useState } from "react";

import ContactInfoForm from "./form-sections/ContactInfoForm";
import EducationFormGroup from "./form-sections/EducationFormGroup";
import WorkExperienceForm from "./form-sections/WorkExperienceForm";
import Section from "./Section";

export default function CVEditForm({ applicant, onSave }) {
  const [contactInfo, setContactInfo] = useState(applicant.contactInfo);
  const [educationPrograms, setEducationPrograms] = useState(
    applicant.educationPrograms,
  );
  const [workExperience, setWorkExperience] = useState(
    applicant.workExperience,
  );

  function submitNewApplicant() {
    onSave({
      contactInfo,
      educationPrograms,
      workExperience,
    });
  }

  function handleContactInfoChange(newContactInfo) {
    setContactInfo(newContactInfo);
  }

  function handleEducationProgramsChange(newEducationPrograms) {
    setEducationPrograms(newEducationPrograms);
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
        <EducationFormGroup
          educationPrograms={educationPrograms}
          onChange={handleEducationProgramsChange}
        />
      </Section>
      <Section title="Work Experience">
        <WorkExperienceForm
          workExperience={workExperience}
          onChange={handleWorkExperienceChange}
        />
      </Section>
      <button type="button" onClick={submitNewApplicant}>
        Save
      </button>
    </>
  );
}
