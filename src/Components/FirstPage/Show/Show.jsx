import React, { Component } from "react";

import "./Show.css";

class Show extends Component {
  state = {
    edit: false,
    text: this.props.db.map(el => el.number),
    editing: this.props.editing
  };

  startEdit = (event, index) => {
    /* все работает, но выход из редактирования двойным кликом */

    // if (this.state.editing === true) {
    //   event.target.className = "input-none > input";
    //   event.target.removeClass = "edit";
    //   this.setState({ editing: !this.state.editing });
    //   console.log("editing " + this.state.editing);
    // } else {
    //   event.target.className = "edit";
    //   event.target.removeClass = "input-none  input";
    //   this.setState({ editing: !this.state.editing });
    //   console.log("editing " + this.state.editing);
    // }

    if (this.state.editing === false) {
      /* работает при false */

      event.target.className = "th > edit";
      console.log("editing " + this.state.editing);
      this.setState(
        prevEditing => (
          { editing: true }, console.log("editing " + this.state.editing)
        )
      );
    }
  };

  typeEdit = (event, index) => {
    console.log(this.state.text);
    const newText = [...this.state.text];

    const justAnotherVariable = index + 1;

    if (justAnotherVariable === Number(this.props.db[index].id)) {
      console.log("index " + index);
      console.log("db.id " + this.props.db[index].id);
      newText[index] = event.target.value;
    }
    this.setState({ text: newText }, () => {
      console.log("completeNumberArray child" + this.state.text);
    });
  };

  render() {
    const show =
      this.props.db.length !== 0 ? (
        this.props.db.map((item, index) => (
          <tr key={index}>
            <th>{item.start_date}</th>
            <th
              onDoubleClick={event => this.startEdit(event, index)}
              className="input-none "
            >
              {item.number}
              <input
                // className={this.state.editing === true ? "" : ""}
                className=""
                key={index}
                type="text"
                value={this.state.text[index]}
                onChange={event => this.typeEdit(event, index)}
                onKeyDown={event =>
                  this.props.typeEnd(event, index, this.state.text)
                }
              />
            </th>
            <th>{item.end_date}</th>
            <th>{item.comment}</th>
            <button
              delete={index}
              name="delete"
              className="deleteButton"
              onClick={this.props.click}
            >
              Удалить
            </button>
          </tr>
        ))
      ) : (
        <p>Данных нет.</p>
      );

    return (
      <div>
        <h3>Invoices</h3>
        <table>
          <tr>
            <th>Create</th>
            <th>№</th>
            <th>Supply</th>
            <th>Comment</th>
          </tr>
          {show}
        </table>
      </div>
    );
  }
}

export default Show;
