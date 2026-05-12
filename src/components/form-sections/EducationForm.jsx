export default function EducationForm({ education, onChange }) {
  const { schoolName, titleOfStudy, graduationDate } = education;

  function handleSchoolNameChange(e) {
    onChange({
      ...education,
      schoolName: e.target.value,
    });
  }

  function handleTitleOfStudyChange(e) {
    onChange({
      ...education,
      titleOfStudy: e.target.value,
    });
  }

  function handleGraduationDateChange(e) {
    onChange({
      ...education,
      graduationDate: e.target.value,
    });
  }

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
            onChange={handleSchoolNameChange}
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
            onChange={handleTitleOfStudyChange}
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
            onChange={handleGraduationDateChange}
          />
        </label>
      </div>
    </form>
  );
}
