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
        <label htmlFor="schoolName">School Name: </label>
        <input
          id="schoolName"
          name="schoolName"
          value={schoolName}
          onChange={onSchoolNameChange}
        />
      </div>
      <div>
        <label htmlFor="titleOfStudy">Title of Study: </label>
        <input
          id="titleOfStudy"
          name="titleOfStudy"
          value={titleOfStudy}
          onChange={onTitleOfStudyChange}
        />
      </div>
      <div>
        <label htmlFor="graduationDate">Graduation Date: </label>
        <input
          id="graduationDate"
          type="date"
          name="graduationDate"
          value={graduationDate}
          onChange={onGraduationDateChange}
        />
      </div>
    </form>
  );
}
