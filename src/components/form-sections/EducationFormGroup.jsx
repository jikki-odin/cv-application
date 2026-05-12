import EducationForm from "./EducationForm";

export default function EducationFormGroup({ educationPrograms, onChange }) {
  function handleEducationProgramChange(newEducationProgram) {
    onChange([
      ...educationPrograms.filter(
        (program) => program.id !== newEducationProgram.id,
      ),
      newEducationProgram,
    ]);
  }

  function handleAddEducationProgram() {
    onChange([
      ...educationPrograms,
      {
        id: crypto.randomUUID(),
        schoolName: "",
        titleOfStudy: "",
        graduationDate: "",
      },
    ]);
  }

  return (
    <>
      {educationPrograms.map((program) => (
        <EducationForm
          key={program.id}
          education={program}
          onChange={handleEducationProgramChange}
        />
      ))}
      <button type="button" onClick={handleAddEducationProgram}>
        Add more education
      </button>
    </>
  );
}
