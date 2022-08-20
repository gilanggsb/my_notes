import React from "react";

class SearchBar extends React.Component {
  render() {
    const { onInputSearchNotes } = this.props;
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search note..."
          onInput={onInputSearchNotes}
        />
      </div>
    );
  }
}
export default SearchBar;
