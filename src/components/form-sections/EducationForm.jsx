export default function EducationForm({
  education,
  onSchoolNameChange,
  onTitleOfStudyChange,
  onGraduationDateChange,
}) {
  const { schoolName, titleOfStudy, graduationDate } = education;

  // TODO: support multiple education sources with dynamic add
  return (
    <form>
      <div>
        <label htmlFor="schoolName">
          School Name:{" "}
          <input
            id="schoolName"
            name="schoolName"
            type="text"
            value={schoolName}
            onChange={onSchoolNameChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="titleOfStudy">
          Title of Study:{" "}
          <input
            id="titleOfStudy"
            name="titleOfStudy"
            type="text"
            value={titleOfStudy}
            onChange={onTitleOfStudyChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="graduationDate">
          Graduation Date:{" "}
          <input
            id="graduationDate"
            name="graduationDate"
            type="date"
            value={graduationDate}
            onChange={onGraduationDateChange}
          />
        </label>
      </div>
    </form>
  );
}
