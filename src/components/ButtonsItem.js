import React from "react";

class ButtonItems extends React.Component {
  render() {
    const { onDeleteButtonClick, onArchiveButtonClick, onPrivateButtonClick, isArchived } =
      this.props;
    return (
      <div className="button_items__container">
        <div className="button hover" onClick={onArchiveButtonClick}>
          {isArchived ? "Active" : "Archive"}
        </div>
        <div className="button hover" onClick={onPrivateButtonClick}>
          Private
        </div>
        <div className="button hover" onClick={onDeleteButtonClick}>
          Delete
        </div>
      </div>
    );
  }
}

export default ButtonItems;
