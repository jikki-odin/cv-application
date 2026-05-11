export default function JobResponsibilityInput({
  jobResponsibility,
  onChange,
  onDelete,
}) {
  const { id, value } = jobResponsibility;

  function handleTextChange(e) {
    onChange(id, e.target.value);
  }

  function handleDeleteClick() {
    onDelete(id);
  }

  return (
    <>
      <input id={id} type="text" value={value} onChange={handleTextChange} />
      <button type="button" onClick={handleDeleteClick}>
        X
      </button>
    </>
  );
}
