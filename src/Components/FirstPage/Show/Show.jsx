import React, { Component } from "react";

import "./Show.css";

class Show extends Component {
  state = {
    edit: false,
    text: this.props.db.map(el => el.number),
    start_date: this.props.db.map(el => el.start_date),
    end_date: this.props.db.map(el => el.end_date),
    comment: this.props.db.map(el => el.comment),
    editing: this.props.editing
  };

  /* onDoubleClick */
  startEdit = event => {
    if (this.state.editing === false) {
      /* работает при false */
      console.log(
        "onDblClick child this.state.start_date: " + this.state.start_date
      );

      event.target.className = "th > edit";
      console.log("editing " + this.state.editing);
      this.setState(
        { editing: false },
        console.log("editing " + this.state.editing)
      );
    }
  };

  /* onChangeHandler */
  typeEdit = (event, index) => {
    console.log(this.state.text);

    const newText = [...this.state.text];
    const newStartDate = [...this.state.start_date];
    const newEndDate = [...this.state.end_date];
    const newComment = [...this.state.comment];
    /* приравнивает index к db.id */
    const justAnotherVariable = index + 1;

    switch (event.target.name) {
      case "number":
        console.log("sssssssssssssss");
        if (justAnotherVariable === Number(this.props.db[index].id)) {
          newText[index] = event.target.value;
        }
        this.setState({ text: newText });
        break;

      case "start_date":
        console.log("aaaaaaaaaaaaaaa");
        if (justAnotherVariable === Number(this.props.db[index].id)) {
          newStartDate[index] = event.target.value;
        }
        this.setState({ start_date: newStartDate });
        break;
      case "end_date":
        console.log("end_date");
        if (justAnotherVariable === Number(this.props.db[index].id)) {
          newEndDate[index] = event.target.value;
        }
        this.setState({ end_date: newEndDate });
        break;
      case "comment":
        console.log("comment");
        if (justAnotherVariable === Number(this.props.db[index].id)) {
          newComment[index] = event.target.value;
        }
        this.setState({ comment: newComment });
        break;
      default:
        console.log("sss");
        break;
    }
    // if (justAnotherVariable === Number(this.props.db[index].id)) {
    //   newText[index] = event.target.value;
    //   newStartDate[index] = event.target.value;
    // }
    // this.setState({ text: newText, start_date: newStartDate });
  };

  render() {
    const show =
      this.props.db.length !== 0 ? (
        this.props.db.map((item, index) => (
          <tr key={index}>
            <th
              onDoubleClick={event => this.startEdit(event)}
              className="input-none"
            >
              {item.start_date}
              <input
                name="start_date"
                key={index}
                type="text"
                value={this.state.start_date[index]}
                onChange={event => this.typeEdit(event, index)}
                /* Передается в родителя */
                onKeyDown={event =>
                  this.props.typeEnd(
                    event,
                    index,
                    this.state.text,
                    this.state.start_date,
                    this.state.end_date,
                    this.state.comment
                  )
                }
              />
            </th>

            {/* --------------------Ячейка таблицы----number-------------- */}
            <th
              onDoubleClick={event => this.startEdit(event)}
              className="input-none "
            >
              {item.number}
              {/* ------------------Инпут------------------ */}
              <input
                name="number"
                className=""
                key={index}
                type="text"
                value={this.state.text[index]}
                onChange={event => this.typeEdit(event, index)}
                /* Передается в родителя */
                onKeyDown={event =>
                  this.props.typeEnd(
                    event,
                    index,
                    this.state.text,
                    this.state.start_date,
                    this.state.end_date,
                    this.state.comment
                  )
                }
              />
            </th>
            {/* -------------------------------------- */}

            <th
              onDoubleClick={event => this.startEdit(event)}
              className="input-none"
            >
              {item.end_date}
              <input
                name="end_date"
                key={index}
                type="text"
                value={this.state.end_date[index]}
                onChange={event => this.typeEdit(event, index)}
                /* Передается в родителя */
                onKeyDown={event =>
                  this.props.typeEnd(
                    event,
                    index,
                    this.state.text,
                    this.state.start_date,
                    this.state.end_date,
                    this.state.comment
                  )
                }
              />
            </th>
            <th
              onDoubleClick={event => this.startEdit(event)}
              className="input-none"
            >
              {item.comment}
              <input
                name="comment"
                key={index}
                type="text"
                value={this.state.comment[index]}
                onChange={event => this.typeEdit(event, index)}
                /* Передается в родителя */
                onKeyDown={event =>
                  this.props.typeEnd(
                    event,
                    index,
                    this.state.text,
                    this.state.start_date,
                    this.state.end_date,
                    this.state.comment
                  )
                }
              />
            </th>
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
