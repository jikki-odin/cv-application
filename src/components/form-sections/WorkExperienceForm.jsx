import JobResponsibilityInput from "./JobResponsibilityInput";

export default function WorkExperienceForm({ workExperience, onChange }) {
  const {
    companyName,
    jobResponsibilities,
    positionTitle,
    startDate,
    endDate,
  } = workExperience;

  const isCurrentRole = endDate === "Present";

  function handleChange(e) {
    onChange({
      ...workExperience,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddJobResponsibility() {
    onChange({
      ...workExperience,
      jobResponsibilities: [
        ...jobResponsibilities,
        { id: crypto.randomUUID(), value: "" },
      ],
    });
  }

  function handleDeleteJobResponsibility(id) {
    onChange({
      ...workExperience,
      jobResponsibilities: jobResponsibilities.filter(
        (jobResponsibility) => jobResponsibility.id !== id,
      ),
    });
  }

  function handleJobResponsibilityTextChange(id, text) {
    const newJobResponsibility = {
      ...jobResponsibilities.find(
        (jobResponsibility) => jobResponsibility.id === id,
      ),
      value: text,
    };

    onChange({
      ...workExperience,
      jobResponsibilities: [
        ...jobResponsibilities.filter(
          (jobResponsibility) => jobResponsibility.id !== id,
        ),
        newJobResponsibility,
      ],
    });
  }

  function handleCurrentRoleCheck(isChecked) {
    if (isChecked) {
      onChange({
        ...workExperience,
        endDate: "Present",
      });
    } else {
      onChange({
        ...workExperience,
        endDate: "",
      });
    }
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
            onChange={handleChange}
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
            onChange={handleChange}
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
                  onChange={handleJobResponsibilityTextChange}
                  onDelete={handleDeleteJobResponsibility}
                />
              </li>
            ))}
          </ul>
          <button type="button" onClick={handleAddJobResponsibility}>
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
            onChange={handleChange}
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
              onChange={() => handleCurrentRoleCheck(true)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={!isCurrentRole}
              onChange={() => handleCurrentRoleCheck(false)}
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
              onChange={handleChange}
            />
          </label>
        </div>
      )}
    </form>
  );
}
