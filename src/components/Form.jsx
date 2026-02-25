import { useActionState } from "react";

function Form({ id, inputSections, action }) {
  const [state, dispatchAction, isPending] = useActionState(action, null);

  return (
    <>
      {state}
      <form className="form" action={dispatchAction}>
        <input name="bookID" value={id} type="hidden" />
        {inputSections.map((inputSection, index) => (
          <div key={index} className="input-section border-beige">
            {inputSection}
          </div>
        ))}
        <button
          disabled={isPending}
          className="uppercase sen-regular background-blue white-text form-button"
        >
          update
        </button>
      </form>
    </>
  );
}

export default Form;
