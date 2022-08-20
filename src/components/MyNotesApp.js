import React from "react";
import { getInitialData } from "../utils";
import Content from "./Content";
import Header from "./Header";
import CreateNotes from "./CreateNotes";
class MyNotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      activeNotesData: [],
      archivedNotesData: [],
    };
    this.filterNotesData = this.filterNotesData.bind(this);
    this.onCreateButtonClick = this.onCreateButtonClick.bind(this);
    this.getDateNow = this.getDateNow.bind(this);
    this.onArchiveButtonClick = this.onArchiveButtonClick.bind(this);
    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onPrivateButtonClick = this.onPrivateButtonClick.bind(this);
    this.allNotes = this.allNotes.bind(this);
    this.onInputSearchNotes = this.onInputSearchNotes.bind(this);
  }

  allNotes = () => this.state.notes;

  componentDidMount() {
    this.filterNotesData();
  }

  filterNotesData = (_allNotes) => {
    let allNotes = this.allNotes();
    if (_allNotes !== undefined) {
      allNotes = _allNotes;
    }

    const listActiveNotes = allNotes.filter((note) => note.archived === false);
    const listArchivedNotes = allNotes.filter((note) => note.archived === true);
    this.setState({
      allNotes: allNotes,
      activeNotesData: listActiveNotes,
      archivedNotesData: listArchivedNotes,
    });
  };

  onCreateButtonClick = ({ titleNotes, bodyNotes }) => {
    let allNotes = this.allNotes();
    allNotes.push({
      id: +new Date(),
      title: titleNotes,
      body: bodyNotes,
      privacy: false,
      createdAt: this.getDateNow(),
      archived: false,
    });
    this.filterNotesData(allNotes);
  };

  onInputSearchNotes = (event) => {
    let filterNotes = this.allNotes().filter((note) =>
      note.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (filterNotes.length === 0) filterNotes = this.allNotes();
    this.filterNotesData(filterNotes);
  };

  onDeleteButtonClick = (notes) => {
    let allNotes = this.allNotes();
    for (var i = 0; i < allNotes.length; i++) {
      if (allNotes[i].title === notes.title) {
        allNotes.splice(i, 1);
        break;
      }
    }
    this.filterNotesData(allNotes);
  };

  onArchiveButtonClick = (id) => {
    let allNotes = this.allNotes();
    let notes = allNotes.find((element) => element.id === id);
    notes.archived = !notes.archived;
    console.log(`cek notes ${JSON.stringify(notes)}`);
    this.filterNotesData(allNotes);
  };

  onPrivateButtonClick = (id) => {
    let allNotes = this.allNotes();
    let notes = allNotes.find((element) => element.id === id);
     notes.privacy = !notes.privacy;
    this.filterNotesData(allNotes);
  };

  getDateNow = () => new Date().toISOString();

  render() {
    return (
      <div>
        <Header onInputSearchNotes={this.onInputSearchNotes} />
        <CreateNotes onCreateButtonClick={this.onCreateButtonClick} />
        <Content
          onPrivateButtonClick={this.onPrivateButtonClick}
          onArchiveButtonClick={this.onArchiveButtonClick}
          onDeleteButtonClick={this.onDeleteButtonClick}
          activeNotesData={this.state.activeNotesData}
          archivedNotesData={this.state.archivedNotesData}
        />
      </div>
    );
  }
}

export default MyNotesApp;
