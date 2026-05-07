import { useState } from "react";

import ContactInfo from "./sections/ContactInfo";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";
import Section from "./Section";
import baseApplicant from "../data";

export default function CVApplication() {
  const [editing, setEditing] = useState(false);
  const [applicant, setApplicant] = useState(baseApplicant);

  function handleClick() {
    setEditing(!editing);
  }

  // TODO: simplify this handler structure!!! Oh so gross...
  function handleNameChange(e) {
    setApplicant({
      ...applicant,
      contactInfo: {
        ...applicant.contactInfo,
        name: e.target.value,
      },
    });
  }

  function handlePhoneChange(e) {
    setApplicant({
      ...applicant,
      contactInfo: {
        ...applicant.contactInfo,
        phone: e.target.value,
      },
    });
  }

  function handleEmailChange(e) {
    setApplicant({
      ...applicant,
      contactInfo: {
        ...applicant.contactInfo,
        email: e.target.value,
      },
    });
  }

  function handleSchoolNameChange(e) {
    setApplicant({
      ...applicant,
      education: {
        ...applicant.education,
        schoolName: e.target.value,
      },
    });
  }

  function handleTitleOfStudyChange(e) {
    setApplicant({
      ...applicant,
      education: {
        ...applicant.education,
        titleOfStudy: e.target.value,
      },
    });
  }

  function handleGraduationDateChange(e) {
    setApplicant({
      ...applicant,
      education: {
        ...applicant.education,
        graduationDate: e.target.value,
      },
    });
  }

  function handleCompanyNameChange(e) {
    setApplicant({
      ...applicant,
      workExperience: {
        ...applicant.workExperience,
        companyName: e.target.value,
      },
    });
  }

  function handlePositionTitleChange(e) {
    setApplicant({
      ...applicant,
      workExperience: {
        ...applicant.workExperience,
        positionTitle: e.target.value,
      },
    });
  }

  function handleStartDateChange(e) {
    setApplicant({
      ...applicant,
      workExperience: {
        ...applicant.workExperience,
        startDate: e.target.value,
      },
    });
  }

  const { contactInfo, education, workExperience } = applicant;

  return (
    <>
      <Section title="Contact Info">
        <ContactInfo
          editing={editing}
          contactInfo={contactInfo}
          onNameChange={handleNameChange}
          onPhoneChange={handlePhoneChange}
          onEmailChange={handleEmailChange}
        />
      </Section>
      <Section title="Education">
        <Education
          editing={editing}
          education={education}
          onSchoolNameChange={handleSchoolNameChange}
          onTitleOfStudyChange={handleTitleOfStudyChange}
          onGraduationDateChange={handleGraduationDateChange}
        />
      </Section>
      <Section title="WorkExperience">
        <WorkExperience
          editing={editing}
          workExperience={workExperience}
          onCompanyNameChange={handleCompanyNameChange}
          onPositionTitleChange={handlePositionTitleChange}
          onStartDateChange={handleStartDateChange}
        />
      </Section>
      <button type="submit" onClick={handleClick}>
        {editing ? "Save" : "Edit"}
      </button>
    </>
  );
}
