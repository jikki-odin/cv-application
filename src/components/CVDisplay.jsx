import Section from "./Section";

export default function CVDisplay({ applicant, onEdit }) {
  const { name, phone, email } = applicant.contactInfo;
  const { schoolName, titleOfStudy, graduationDate } = applicant.education;
  const { companyName, positionTitle, startDate } = applicant.workExperience;
  return (
    <>
      <Section title="ContactInfo">
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </Section>
      <Section title="Education">
        <p>School: {schoolName}</p>
        <p>Title of Study: {titleOfStudy}</p>
        <p>Graduated: {graduationDate}</p>
      </Section>
      <Section title="WorkExperience">
        <p>Company: {companyName}</p>
        <p>Position: {positionTitle}</p>
        <p>Started: {startDate}</p>
      </Section>
      <button type="submit" onClick={onEdit}>
        Edit
      </button>
    </>
  );
}
