import JobResponsibilityInput from "./JobResponsibilityInput";

export default function WorkExperienceForm({
  workExperience,
  onCompanyNameChange,
  onAddJobResponsibility,
  onJobResponsibilityTextChange,
  onPositionTitleChange,
  onStartDateChange,
  onEndDateChange,
}) {
  const {
    companyName,
    jobResponsibilities,
    positionTitle,
    startDate,
    endDate,
  } = workExperience;

  function handleAddClick() {
    onAddJobResponsibility();
  }

  // TODO: support multiple jobs
  // TODO: add some sort of "I currently work here" button
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
          type="date"
          value={startDate}
          onChange={onStartDateChange}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date: </label>
        <input
          id="endDate"
          name="endDate"
          type="date"
          value={endDate}
          onChange={onEndDateChange}
        />
      </div>
    </form>
  );
}
