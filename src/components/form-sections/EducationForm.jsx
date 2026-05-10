export default function EducationForm({
  education,
  onSchoolNameChange,
  onTitleOfStudyChange,
  onGraduationDateChange,
}) {
  const { schoolName, titleOfStudy, graduationDate } = education;

  // TODO: support multiple education sources with dynamic add
  // TODO: make graduationDate a date selector w/appropriate datatype
  return (
    <form>
      <div>
        <label htmlFor="schoolName">School Name: </label>
        <input
          name="schoolName"
          value={schoolName}
          onChange={onSchoolNameChange}
        />
      </div>
      <div>
        <label htmlFor="titleOfStudy">Title of Study: </label>
        <input
          name="titleOfStudy"
          value={titleOfStudy}
          onChange={onTitleOfStudyChange}
        />
      </div>
      <div>
        <label htmlFor="graduationDate">Graduation Date: </label>
        <input
          name="graduationDate"
          value={graduationDate}
          onChange={onGraduationDateChange}
        />
      </div>
    </form>
  );
}
