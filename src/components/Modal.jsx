import "../styles/modal/index.css";

function Modal({ removeModal }) {
  return (
    <div className="modal background-white">
      <div className="modal-title-section border-beige">
        <h2 className="sen-regular capitalize">book info</h2>
        <button
          onClick={removeModal}
          className="sen-bold small-text background-white background-white-hover modal-close-button"
        >
          close
        </button>
      </div>
      <form className="form">
        <div className="input-section border-beige">
          <label className="sen-bold small-text" for="chapters">
            chapters
          </label>
          <div className="form-fields">
            <input
              id="chapters"
              name="chapters"
              placeholder="e.x. 20"
              className="sen-regular border-beige input form-field"
              type="number"
            />
          </div>
        </div>
        <div className="input-section border-beige">
          <span className="sen-bold small-text">pages</span>
          <div className="form-fields">
            <div className="form-subfield">
              <label className="sen-regular small-text" for="startPage">
                start page
              </label>
              <input
                id="startPage"
                name="startPage"
                placeholder="e.x. 5"
                className="sen-regular border-beige form-field"
                type="number"
              />
            </div>
            <div className="form-subfield">
              <label className="sen-regular small-text" for="endPage">
                end page
              </label>
              <input
                id="endPage"
                name="endPage"
                placeholder="e.x. 200"
                className="sen-regular border-beige form-field"
                type="number"
              />
            </div>
          </div>
        </div>
        <button className="uppercase sen-regular background-blue white-text form-button">
          update
        </button>
      </form>
    </div>
  );
}

export default Modal;
