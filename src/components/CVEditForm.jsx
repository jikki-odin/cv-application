import { useState } from "react";

import ContactInfoForm from "./form-sections/ContactInfoForm";
import EducationForm from "./form-sections/EducationForm";
import WorkExperienceForm from "./form-sections/WorkExperienceForm";
import Section from "./Section";

export default function CVEditForm({ applicant, onSave }) {
  const { contactInfo, education, workExperience } = applicant;

  const [name, setName] = useState(contactInfo.name);
  const [phone, setPhone] = useState(contactInfo.phone);
  const [email, setEmail] = useState(contactInfo.email);
  const [schoolName, setSchoolName] = useState(education.schoolName);
  const [titleOfStudy, setTitleOfStudy] = useState(education.titleOfStudy);
  const [graduationDate, setGraduationDate] = useState(
    education.graduationDate,
  );
  const [companyName, setCompanyName] = useState(workExperience.companyName);
  const [positionTitle, setPositionTitle] = useState(
    workExperience.positionTitle,
  );
  const [startDate, setStartDate] = useState(workExperience.startDate);

  function submitNewApplicant() {
    onSave({
      contactInfo: {
        name,
        phone,
        email,
      },
      education: {
        schoolName,
        titleOfStudy,
        graduationDate,
      },
      workExperience: {
        companyName,
        positionTitle,
        startDate,
      },
    });
  }

  // TODO: now THIS is where the handler mess needs to be fixed
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleTitleOfStudyChange(e) {
    setTitleOfStudy(e.target.value);
  }

  function handleGraduationDateChange(e) {
    setGraduationDate(e.target.value);
  }

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handlePositionTitleChange(e) {
    setPositionTitle(e.target.value);
  }

  function handleStartDateChange(e) {
    setStartDate(e.target.value);
  }

  return (
    <>
      <Section title="Contact Info">
        <ContactInfoForm
          contactInfo={{ name, phone, email }}
          onNameChange={handleNameChange}
          onPhoneChange={handlePhoneChange}
          onEmailChange={handleEmailChange}
        />
      </Section>
      <Section title="Education">
        <EducationForm
          education={{ schoolName, titleOfStudy, graduationDate }}
          onSchoolNameChange={handleSchoolNameChange}
          onTitleOfStudyChange={handleTitleOfStudyChange}
          onGraduationDateChange={handleGraduationDateChange}
        />
      </Section>
      <Section title="WorkExperience">
        <WorkExperienceForm
          workExperience={{ companyName, positionTitle, startDate }}
          onCompanyNameChange={handleCompanyNameChange}
          onPositionTitleChange={handlePositionTitleChange}
          onStartDateChange={handleStartDateChange}
        />
      </Section>
      <button type="submit" onClick={submitNewApplicant}>
        Save
      </button>
    </>
  );
}
