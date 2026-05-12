import { formatDate } from "../../utils";

export default function Education({ education }) {
  const { schoolName, titleOfStudy, graduationDate } = education;

  return (
    <>
      <p>School: {schoolName}</p>
      <p>Title of Study: {titleOfStudy}</p>
      <p>Graduated: {graduationDate ? formatDate(graduationDate) : ""}</p>
    </>
  );
}
