import React from "react";

import "../main.css";
import Title from "../../Components/FirstPage/Title/Title";
import Add from "../../Components/FirstPage/Add/Add";
import Show from "../../Components/FirstPage/Show/Show";

class firsPage extends React.Component {
  state = {
    db: []
  };

  componentDidMount = async () => {
    await this.fetchGET();
  };

  fetchGET = async () => {
    await fetch("http://localhost:3000/invoices")
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        this.setState({ db: data });
      })
      .catch(error => console.log("error", error));
  };

  fetchDELETE = async id => {
    await fetch(`http://localhost:3000/invoices/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());
  };

  handleClick = async event => {
    const { db } = this.state;
    let i = event.target.attributes.delete.nodeValue;

    await this.fetchDELETE(db[i].id);
    await this.fetchGET();

    console.log("Delete:", db[i]);
  };

  render() {
    return (
      <div className="main">
        <Title />
        <Add />
        <Show db={this.state.db} click={event => this.handleClick(event)} />
      </div>
    );
  }
}

export default firsPage;
