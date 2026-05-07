export default function Education({ editing }) {
  const schoolName = "Duke University";
  const titleOfStudy = "Chemistry";
  const graduationDate = "May 2016";

  return (
    <form>
      <div>
        <label for="schoolName">School Name: </label>
        {editing ? <input name="schoolName"></input> : schoolName}
      </div>
      <div>
        <label for="titleOfStudy">Title of Study: </label>
        {editing ? <input name="titleOfStudy"></input> : titleOfStudy}
      </div>
      <div>
        <label for="graduationDate">Graduation Date: </label>
        {editing ? <input name="graduationDate"></input> : graduationDate}
      </div>
    </form>
  );
}
