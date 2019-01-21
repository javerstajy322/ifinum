import React, { Component } from "react";

import "./Show.css";

class Show extends Component {
  render() {
    const show =
      this.props.db.length !== 0 ? (
        this.props.db.map((item, index) => (
          <tr key={index}>
            <th>{item.start_date}</th>
            <th>{item.number}</th>
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
