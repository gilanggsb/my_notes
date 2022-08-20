import { render } from "@testing-library/react";
import React from "react";

export default class InputCreateButton extends React.Component {
  render() {
    const { onCreateButtonClick } = this.props;
    return (
      <div onClick={onCreateButtonClick}>
        <div className="column right">
          <div className="create-notes__button hover">Create</div>
        </div>
      </div>
    );
  }
}
