import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebaritem/sidebarItem";

class SidebarComponent extends React.Component {
  state = {
    addingNote: false,
    title: null,
  };

  newNoteBtnClick = () => {
    console.log("New Btn Clicked");
    this.setState({ addingNote: !this.state.addingNote, title: null });
  };

  updateTitle = (txt) => {
    this.setState({ title: txt });
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({
      title: null,
      addingNote: false,
    });
  };

  selectNote = (note, index) => this.props.selectNote(note, index);

  deleteNote = (note) => {
    this.props.deleteNote(note);
  };

  render() {
    const { classes, notes, selectedNoteIndex } = this.props;
    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
            {this.state.addingNote ? "Cancel" : "New Note"}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type="text"
                className={classes.newNoteInput}
                placeholder="Note Title"
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              />
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              >
                Save Note
              </Button>
            </div>
          ) : null}

          <List>
            {notes.map((note, index) => (
              <div key={index}>
                <SidebarItemComponent
                  note={note}
                  index={index}
                  selectedNoteIndex={selectedNoteIndex}
                  selectNote={this.selectNote}
                  deleteNote={this.deleteNote}
                />
                <Divider />
              </div>
            ))}
          </List>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default withStyles(styles)(SidebarComponent);
