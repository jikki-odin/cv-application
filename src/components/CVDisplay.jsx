import ContactInfo from "./sections/ContactInfo";
import EducationGroup from "./sections/EducationGroup";
import WorkExperience from "./sections/WorkExperience";

export default function CVDisplay({ applicant, onEdit }) {
  const { contactInfo, educationPrograms, workExperience } = applicant;

  return (
    <>
      <ContactInfo contactInfo={contactInfo} />
      <EducationGroup educationPrograms={educationPrograms} />
      <WorkExperience workExperience={workExperience} />
      <button type="submit" onClick={onEdit}>
        Edit
      </button>
    </>
  );
}
