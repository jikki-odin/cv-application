export default function WorkExperience({ editing, workExperience }) {
  const { companyName, positionTitle, startDate } = workExperience;

  return (
    <form>
      <div>
        <label for="companyName">Company Name: </label>
        {editing ? (
          <input name="companyName" value={companyName}></input>
        ) : (
          companyName
        )}
      </div>
      <div>
        <label for="positionTitle">Position Title: </label>
        {editing ? (
          <input name="positionTitle" value={positionTitle}></input>
        ) : (
          positionTitle
        )}
      </div>
      <div>
        <label for="startDate">Start Date: </label>
        {editing ? (
          <input name="startDate" value={startDate}></input>
        ) : (
          startDate
        )}
      </div>
    </form>
  );
}
