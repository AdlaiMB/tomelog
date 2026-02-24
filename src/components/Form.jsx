function Form({ id, inputSections, action }) {
  return (
    <form className="form">
      <input name="bookID" value={id} type="hidden" />
      {inputSections.map((inputSection, index) => (
        <div key={index} className="input-section border-beige">
          {inputSection}
        </div>
      ))}
      <button className="uppercase sen-regular background-blue white-text form-button">
        update
      </button>
    </form>
  );
}

export default Form;
