import React from "react";

class InputTitleNotes extends React.Component {
  render() {
    let { onInputTitleChange, titleNotes } = this.props;
    return (
      <div>
        <div className="title white-color">Title :</div>
        <input
          className="create-notes__input"
          type="text"
          value={titleNotes}
          onChange={onInputTitleChange}
        />
      </div>
    );
  }
}

export default InputTitleNotes;
