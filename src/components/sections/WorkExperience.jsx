export default function WorkExperience({ editing }) {
  const companyName = "Company Ltd.";
  const positionTitle = "Software Engineer";
  const startDate = "June 2016";

  return (
    <form>
      <div>
        <label for="companyName">Company Name: </label>
        {editing ? <input name="companyName"></input> : companyName}
      </div>
      <div>
        <label for="positionTitle">Position Title: </label>
        {editing ? <input name="positionTitle"></input> : positionTitle}
      </div>
      <div>
        <label for="startDate">Start Date: </label>
        {editing ? <input name="startDate"></input> : startDate}
      </div>
    </form>
  );
}
