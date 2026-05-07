export default function Education({ editing, education }) {
  const { schoolName, titleOfStudy, graduationDate } = education;

  return (
    <form>
      <div>
        <label for="schoolName">School Name: </label>
        {editing ? (
          <input name="schoolName" value={schoolName}></input>
        ) : (
          schoolName
        )}
      </div>
      <div>
        <label for="titleOfStudy">Title of Study: </label>
        {editing ? (
          <input name="titleOfStudy" value={titleOfStudy}></input>
        ) : (
          titleOfStudy
        )}
      </div>
      <div>
        <label for="graduationDate">Graduation Date: </label>
        {editing ? (
          <input name="graduationDate" value={graduationDate}></input>
        ) : (
          graduationDate
        )}
      </div>
    </form>
  );
}
