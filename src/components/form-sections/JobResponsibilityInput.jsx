export default function JobResponsibilityInput({
  jobResponsibility,
  onChange,
}) {
  const { id, value } = jobResponsibility;

  function handleTextChange(e) {
    onChange(id, e.target.value);
  }

  return (
    <>
      <input id={id} value={value} onChange={handleTextChange} />
      <button type="button">X</button>
    </>
  );
}
