import React from "react";
import "./style.css";

const Form = ({
  handleSubmit,
  midday,
  setMidday,
  midnight,
  setMidnight,
  notes,
  setNotes
}) => {
  return (
    <form id="Form" onSubmit={(e) => handleSubmit(e)}>
      <div className="element">
        <input
          type="checkbox"
          id="midday"
          name="midday"
          checked={midday || false}
          onChange={() => setMidday(!midday)}
        />
        <label htmlFor="midday">Viande à midi</label>
        <p>Midi</p>
      </div>
      <div className="element">
        <input
          type="checkbox"
          id="midnight"
          name="midnight"
          checked={midnight || false}
          onChange={() => setMidnight(!midnight)}
        />
        <label htmlFor="midnight">Viande le soir</label>
        <p>Soir</p>
      </div>
      <div className="element-text">
        <p>Notes</p>
        <textarea
          id="notes"
          name="notes"
          onChange={(event) => setNotes(event.target.value)}
          value={notes || ""}
        />
      </div>
      <input type="submit" value="Enregister" />
    </form>
  );
};

export default Form;
