export default function Education({
  editing,
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
        {editing ? (
          <input
            name="schoolName"
            value={schoolName}
            onChange={onSchoolNameChange}
          ></input>
        ) : (
          schoolName
        )}
      </div>
      <div>
        <label for="titleOfStudy">Title of Study: </label>
        {editing ? (
          <input
            name="titleOfStudy"
            value={titleOfStudy}
            onChange={onTitleOfStudyChange}
          ></input>
        ) : (
          titleOfStudy
        )}
      </div>
      <div>
        <label for="graduationDate">Graduation Date: </label>
        {editing ? (
          <input
            name="graduationDate"
            value={graduationDate}
            onChange={onGraduationDateChange}
          ></input>
        ) : (
          graduationDate
        )}
      </div>
    </form>
  );
}
