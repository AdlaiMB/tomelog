function Form({ id, inputSections, action }) {
  return (
    <form className="form" action={action}>
      <input name="bookID" value={id} type="hidden" />
      {inputSections.map((inputSection, index) => (
        <div key={index} className="input-section border-beige">
          {inputSection}
        </div>
      ))}
      <button className="uppercase sen-regular background-blue background-blue-hover white-text form-button">
        update
      </button>
    </form>
  );
}

export default Form;
