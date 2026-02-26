function Form({ id, inputSections, updateToast, slideInToast, slideOutToast }) {
  const action = (formData) => {
    console.log("do some processing");
    console.log(formData);
    updateToast(
      "update success",
      "success",
      "The book has been successfully updated.",
    );
    slideInToast();
    setTimeout(() => {
      slideOutToast();
    }, 1500);
  };

  return (
    <form className="form" action={action}>
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
