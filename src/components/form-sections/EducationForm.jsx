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
        <label for="schoolName">School Name: </label>
        <input
          name="schoolName"
          value={schoolName}
          onChange={onSchoolNameChange}
        />
      </div>
      <div>
        <label for="titleOfStudy">Title of Study: </label>
        <input
          name="titleOfStudy"
          value={titleOfStudy}
          onChange={onTitleOfStudyChange}
        />
      </div>
      <div>
        <label for="graduationDate">Graduation Date: </label>
        <input
          name="graduationDate"
          value={graduationDate}
          onChange={onGraduationDateChange}
        />
      </div>
    </form>
  );
}
