import React, { Component } from "react";

import "./Show.css";

class Show extends Component {
  render() {
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
          {this.props.db.map((item, index) => (
            <tr key={index}>
              <th>{item.date_created}</th>
              <th>{item.number}</th>
              <th>{item.date_supply}</th>
              <th>{item.comment}</th>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Show;
