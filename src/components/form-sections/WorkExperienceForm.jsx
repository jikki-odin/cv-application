export default function WorkExperienceForm({
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
        <label htmlFor="companyName">Company Name: </label>
        <input
          name="companyName"
          value={companyName}
          onChange={onCompanyNameChange}
        />
      </div>
      <div>
        <label htmlFor="positionTitle">Position Title: </label>
        <input
          name="positionTitle"
          value={positionTitle}
          onChange={onPositionTitleChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date: </label>
        <input
          name="startDate"
          value={startDate}
          onChange={onStartDateChange}
        />
      </div>
    </form>
  );
}
