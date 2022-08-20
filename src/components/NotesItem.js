import React from "react";
import ButtonItems from "./ButtonsItem";
import { showFormattedDate } from "../utils/index";
class NotesItem extends React.Component {
  render() {
    const {
      data,
      onArchiveButtonClick,
      onDeleteButtonClick,
      onPrivateButtonClick,
    } = this.props;
    return (
      <div className="notes-item column space-between">
        <div className={data.privacy ? "blur" : ""}>
          <div className="title">{data.title}</div>
          <div className="desc">{data.body}</div>
          <div className="date">{showFormattedDate(data.createdAt)}</div>
        </div>
        <ButtonItems
          isArchived={data.archived}
          onDeleteButtonClick={() => onDeleteButtonClick(data)}
          onPrivateButtonClick={() => onPrivateButtonClick(data.id)}
          onArchiveButtonClick={() => onArchiveButtonClick(data.id)}
        />
      </div>
    );
  }
}

export default NotesItem;
