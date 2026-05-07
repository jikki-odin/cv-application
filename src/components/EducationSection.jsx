export default function EducationSection() {
  return (
    <div>
      <h1>Education</h1>
      <form>
        <div>
          <label for="schoolName">School Name:</label>
          <input name="schoolName"></input>
        </div>
        <div>
          <label for="titleOfStudy">Title of Study:</label>
          <input name="titleOfStudy"></input>
        </div>
        <div>
          <label for="graduationDate">Graduation Date:</label>
          <input name="graduationDate"></input>
        </div>
      </form>
    </div>
  );
}
