function App() {
  return (
    <>
      <div>
        <h1>Contact Info</h1>
        <form>
          <div>
            <label for="name">Name:</label>
            <input name="name"></input>
          </div>
          <div>
            <label for="phone">Phone:</label>
            <input name="phone"></input>
          </div>
          <div>
            <label for="email">Email Address:</label>
            <input type="email" name="email"></input>
          </div>
        </form>
      </div>
      <div>
        <h1>Education</h1>
        <form>
          <div>
            <label for="schoolName">School Name:</label>
            <input name="schoolName"></input>
          </div>
          <div>
            <label for="titleOfStudy">Title of Study:</label>
            <input name="titleOfStudy"></input>
          </div>
          <div>
            <label for="graduationDate">Graduation Date:</label>
            <input name="graduationDate"></input>
          </div>
        </form>
      </div>
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
    </>
  );
}

export default App;
