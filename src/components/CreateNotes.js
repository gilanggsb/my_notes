import React from "react";
import InputTitleNotes from "./InputTitleNotes";
import InputBodyNotes from "./InputBodyNotes";
import InputCreateButton from "./InputCreateButton";
class CreateNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNotes: "",
      bodyNotes: "",
      isTitleReachMax: false,
    };
    this.onInputTitleChange = this.onInputTitleChange.bind(this);
    this.onInputBodyChange = this.onInputBodyChange.bind(this);
    this.createNotes = this.createNotes.bind(this);
  }

  onInputTitleChange = (event) => {
    this.setState({
      titleNotes: event.target.value,
      isTitleReachMax: false,
    });
    if (event.target.value.length > 50)
      this.setState({ isTitleReachMax: true });
  };

  onInputBodyChange = (event) =>
    this.setState({
      bodyNotes: event.target.innerText,
    });

  createNotes = (onCreateButtonClick) => {
    onCreateButtonClick({
      titleNotes: this.state.titleNotes,
      bodyNotes: this.state.bodyNotes,
    });
    this.setState({
      titleNotes: "",
      bodyNotes: "",
      isTitleReachMax: false,
    });
    document.getElementById("bodyNotes").innerHTML = "";
  };

  render() {
    let { onCreateButtonClick } = this.props;
    return (
      <div className="center">
        <div className="create-notes__container">
          <form>
            <InputTitleNotes
              titleNotes={this.state.titleNotes}
              onInputTitleChange={this.onInputTitleChange}
            />
            {this.state.isTitleReachMax ? (
              <small className="text-red">
                * Maximum 50 characters for title
              </small>
            ) : this.state.titleNotes.length !== 0 &&
              this.state.titleNotes.length !== 50 ? (
              <small className="text-green">
                {50 - this.state.titleNotes.length + " "}
                characters left for title
              </small>
            ) : (
              ""
            )}
            <InputBodyNotes
              bodyNotes={this.state.bodyNotes}
              onInputBodyChange={this.onInputBodyChange}
            />
            <InputCreateButton
              onCreateButtonClick={() => {
                if (!this.state.isTitleReachMax) {
                  this.createNotes(onCreateButtonClick);
                }
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNotes;
