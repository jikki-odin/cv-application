export default function EducationForm({ education, onChange }) {
  const { schoolName, titleOfStudy, graduationDate } = education;

  function handleChange(e) {
    onChange({
      ...education,
      [e.target.name]: e.target.value,
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
}
