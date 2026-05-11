import { formatDate } from "../../utils";
import Section from "../Section";

export default function WorkExperience({ workExperience }) {
  const {
    companyName,
    jobResponsibilities,
    positionTitle,
    startDate,
    endDate,
  } = workExperience;

  return (
    <Section title="WorkExperience">
      <p>Company: {companyName}</p>
      <p>Position: {positionTitle}</p>
      <p>Job Responsibilities:</p>
      <ul>
        {jobResponsibilities.map(({ id, value }) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
      <p>
        Date Range:{" "}
        {startDate && endDate
          ? `${formatDate(startDate)} - ${formatDate(endDate)}`
          : ""}
      </p>
    </Section>
  );
}
