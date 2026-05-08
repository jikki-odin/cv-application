import { useState } from "react";

import baseApplicant from "../data";
import CVEditForm from "./CVEditForm";
import CVDisplay from "./CVDisplay";

export default function CVApplication() {
  const [editing, setEditing] = useState(false);
  const [applicant, setApplicant] = useState(baseApplicant);

  function handleEdit() {
    setEditing(true);
  }

  function handleSave(newApplicant) {
    setApplicant(newApplicant);
    setEditing(false);
  }

  // TODO: add styling!
  // TODO: add empty state page w/control flow
  return (
    <>
      {editing ? (
        <CVEditForm applicant={applicant} onSave={handleSave} />
      ) : (
        <CVDisplay applicant={applicant} onEdit={handleEdit} />
      )}
    </>
  );
}
