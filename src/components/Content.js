import React from "react";
import NotesItem from "./NotesItem";
class Content extends React.Component {
  render() {
    const {
      activeNotesData,
      archivedNotesData,
      onDeleteButtonClick,
      onArchiveButtonClick,
      onPrivateButtonClick,
    } = this.props;
    return (
      <div className="content">
        <div className="title-app">Active Notes</div>
        <div className="wrapper center">
          {activeNotesData.length === 0 ? (
            <h3>Note Is Empty.</h3>
          ) : (
            activeNotesData.map((item, index) => (
              <NotesItem
                data={item}
                key={index}
                onArchiveButtonClick={onArchiveButtonClick}
                onDeleteButtonClick={onDeleteButtonClick}
                onPrivateButtonClick={onPrivateButtonClick}
              />
            ))
          )}
        </div>
        <div className="title-app">Archived Notes</div>
        <div className="wrapper center">
          {archivedNotesData.length === 0 ? (
            <h3>Note Is Empty.</h3>
          ) : (
            archivedNotesData.map((item, index) => (
              <NotesItem
                data={item}
                key={index}
                onArchiveButtonClick={onArchiveButtonClick}
                onDeleteButtonClick={onDeleteButtonClick}
                onPrivateButtonClick={onPrivateButtonClick}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Content;
