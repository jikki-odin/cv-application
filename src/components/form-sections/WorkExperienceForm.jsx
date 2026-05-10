import JobResponsibilityInput from "./JobResponsibilityInput";

export default function WorkExperienceForm({
  workExperience,
  onCompanyNameChange,
  onAddJobResponsibility,
  onJobResponsibilityTextChange,
  onPositionTitleChange,
  onStartDateChange,
}) {
  const { companyName, jobResponsibilities, positionTitle, startDate } =
    workExperience;

  function handleAddClick() {
    onAddJobResponsibility();
  }

  // TODO: add job responsibilities dynamic bullet list
  // TODO: support multiple jobs
  // TODO: handle dates with inputs and date types
  return (
    <form>
      <div>
        <label htmlFor="companyName">Company Name: </label>
        <input
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={onCompanyNameChange}
        />
      </div>
      <div>
        <label htmlFor="positionTitle">Position Title: </label>
        <input
          id="positionTitle"
          name="positionTitle"
          value={positionTitle}
          onChange={onPositionTitleChange}
        />
      </div>
      <div>
        <label>Job Responsibilities: </label>
        <ul>
          {jobResponsibilities.map((jobResponsibility) => (
            <li key={jobResponsibility.id}>
              <JobResponsibilityInput
                jobResponsibility={jobResponsibility}
                onChange={onJobResponsibilityTextChange}
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddClick}>
          +
        </button>
      </div>
      <div>
        <label htmlFor="startDate">Start Date: </label>
        <input
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={onStartDateChange}
        />
      </div>
    </form>
  );
}
