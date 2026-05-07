export default function WorkExperienceSection() {
  return (
    <div>
      <h1>Work Experience</h1>
      <form>
        <div>
          <label for="companyName">Company Name:</label>
          <input name="companyName"></input>
        </div>
        <div>
          <label for="positionTitle">Position Title:</label>
          <input name="positionTitle"></input>
        </div>
        <div>
          <label for="startDate">Start Date:</label>
          <input name="startDate"></input>
        </div>
      </form>
    </div>
  );
}
