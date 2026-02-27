import "../styles/components/form.css";

import { useState } from "react";

function Form({ id, inputSections, action }) {
  const [isToastPresent, setIsToastPresent] = useState(false);
  const handleAction = (formData) => {
    setIsToastPresent(true);
    setTimeout(() => {
      setIsToastPresent(false);
    }, 3500);
    action(formData);
  };

  return (
    <form className="form" action={handleAction}>
      <input name="bookID" value={id} type="hidden" />
      {inputSections.map((inputSection, index) => (
        <div key={index} className="input-section border-beige">
          {inputSection}
        </div>
      ))}
      <button
        disabled={isToastPresent}
        className={`uppercase sen-regular ${isToastPresent ? "background-medium-blue" : "background-blue background-blue-hover"} white-text form-button`}
      >
        {isToastPresent ? "disabled" : "update"}
      </button>
    </form>
  );
}

export default Form;
