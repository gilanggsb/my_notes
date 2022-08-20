import React from "react";

class InputBodyNotes extends React.Component {
  render() {
    let { onInputBodyChange, bodyNotes } = this.props;
    return (
      <div>
        <div className="title white-color">Description :</div>
        <span
          id="bodyNotes"
          className="create-notes__desc"
          placeholder="Note..."
          contentEditable="true"
          value={bodyNotes}
          onInput={onInputBodyChange}
        />
      </div>
    );
  }
}

export default InputBodyNotes;
