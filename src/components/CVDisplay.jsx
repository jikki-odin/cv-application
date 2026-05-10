import ContactInfo from "./sections/ContactInfo";
import Education from "./sections/Education";
import WorkExperience from "./sections/WorkExperience";

export default function CVDisplay({ applicant, onEdit }) {
  const { contactInfo, education, workExperience } = applicant;

  return (
    <>
      <ContactInfo contactInfo={contactInfo} />
      <Education education={education} />
      <WorkExperience workExperience={workExperience} />
      <button type="submit" onClick={onEdit}>
        Edit
      </button>
    </>
  );
}
