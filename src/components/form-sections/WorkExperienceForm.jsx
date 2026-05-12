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
        <label htmlFor="companyName">
          Company Name:{" "}
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={companyName}
            onChange={onCompanyNameChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="positionTitle">
          Position Title:{" "}
          <input
            id="positionTitle"
            name="positionTitle"
            type="text"
            value={positionTitle}
            onChange={onPositionTitleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Job Responsibilities:
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
        </label>
      </div>
      <div>
        <label htmlFor="startDate">
          Start Date:{" "}
          <input
            id="startDate"
            name="startDate"
            type="date"
            value={startDate}
            onChange={onStartDateChange}
          />
        </label>
      </div>
      <div>
        <label>
          Do you still work here?{" "}
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
        </label>
      </div>
      {!isCurrentRole && (
        <div>
          <label htmlFor="endDate">
            End Date:{" "}
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={endDate}
              onChange={onEndDateChange}
            />
          </label>
        </div>
      )}
    </form>
  );
}
