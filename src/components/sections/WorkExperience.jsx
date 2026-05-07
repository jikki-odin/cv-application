export default function WorkExperience({
  editing,
  workExperience,
  onCompanyNameChange,
  onPositionTitleChange,
  onStartDateChange,
}) {
  const { companyName, positionTitle, startDate } = workExperience;

  // TODO: add job responsibilities dynamic bullet list
  // TODO: support multiple jobs
  // TODO: handle dates with inputs and date types
  return (
    <form>
      <div>
        <label for="companyName">Company Name: </label>
        {editing ? (
          <input
            name="companyName"
            value={companyName}
            onChange={onCompanyNameChange}
          ></input>
        ) : (
          companyName
        )}
      </div>
      <div>
        <label for="positionTitle">Position Title: </label>
        {editing ? (
          <input
            name="positionTitle"
            value={positionTitle}
            onChange={onPositionTitleChange}
          ></input>
        ) : (
          positionTitle
        )}
      </div>
      <div>
        <label for="startDate">Start Date: </label>
        {editing ? (
          <input
            name="startDate"
            value={startDate}
            onChange={onStartDateChange}
          ></input>
        ) : (
          startDate
        )}
      </div>
    </form>
  );
}
