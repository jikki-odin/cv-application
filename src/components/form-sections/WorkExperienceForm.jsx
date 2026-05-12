import JobResponsibilityInput from "./JobResponsibilityInput";

export default function WorkExperienceForm({
  workExperience,
  onCompanyNameChange,
  onAddJobResponsibility,
  onDeleteJobResponsibility,
  onJobResponsibilityTextChange,
  onPositionTitleChange,
  onStartDateChange,
  onEndDateChange,
  onCurrentRoleChecked,
}) {
  const {
    companyName,
    jobResponsibilities,
    positionTitle,
    startDate,
    endDate,
    isCurrentRole,
  } = workExperience;

  function handleAddClick() {
    onAddJobResponsibility();
  }

  // TODO: support multiple jobs
  // TODO: validate best practice on current role logic
  // TODO: shore up brittle job responsibility form logic (e.g. don't allow multiple empties etc.)
  return (
    <form>
      <div>
        <label htmlFor="companyName">Company Name: </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          value={companyName}
          onChange={onCompanyNameChange}
        />
      </div>
      <div>
        <label htmlFor="positionTitle">Position Title: </label>
        <input
          id="positionTitle"
          name="positionTitle"
          type="text"
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
                onDelete={onDeleteJobResponsibility}
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
        <label>Do you still work here? </label>
        <label>
          <input
            type="radio"
            value="yes"
            checked={isCurrentRole}
            onChange={() => onCurrentRoleChecked(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={!isCurrentRole}
            onChange={() => onCurrentRoleChecked(false)}
          />
          No
        </label>
      </div>
      {!isCurrentRole && (
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
      )}
    </form>
  );
}
