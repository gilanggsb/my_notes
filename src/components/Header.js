import React from "react";
import SearchBar from "./SearchBar";
class Header extends React.Component {
  render() {
    const { onInputSearchNotes } = this.props;
    return (
      <div className="header">
        <div className="title-app">My Notes</div>
        <SearchBar onInputSearchNotes={onInputSearchNotes} />
      </div>
    );
  }
}

export default Header;
