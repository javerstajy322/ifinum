import React from "react";

import "../main.css";
import Title from "../../Components/FirstPage/Title/Title";
import Add from "../../Components/FirstPage/Add/Add";
import Show from "../../Components/FirstPage/Show/Show";

class firsPage extends React.Component {
  state = {
    db: [],
    loading: true,
    editing: false
  };

  componentDidMount = () => {
    this.fetchGET();
  };

  fetchGET = async () => {
    await fetch("http://localhost:3000/invoices")
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        this.setState({ db: data, loading: false });
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

  fetchEDIT = async (number, start_date, end_date, comment, id) => {
    await fetch(`http://localhost:3000/invoices/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        number: number,
        start_date: start_date,
        end_date: end_date,
        comment: comment
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());
  };

  typeEndHandler = async (
    event,
    index,
    completeNumberArray,
    completeStartDateArray,
    completeEndDateArray,
    completeCommentArray
  ) => {
    const indexEquelid = index + 1;
    const number = completeNumberArray[index];
    const start_date = completeStartDateArray[index];
    const end_date = completeEndDateArray[index];
    const comment = completeCommentArray[index];
    const a = document.querySelector(".edit");

    console.log("completeNumberArray " + completeNumberArray);
    if (event.keyCode === 13) {
      await this.fetchEDIT(number, start_date, end_date, comment, indexEquelid);
      await this.fetchGET();
      a.classList.remove("edit");
      a.className = "input-none > input";
      console.log(event.a);
      this.setState(
        { editing: true },
        console.log("editing " + this.state.editing)
      );
    }
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div className="main">
          <Title />
          <Add />
          <div className="loader" />
        </div>
      );
    }

    return (
      <div className="main">
        <Title />
        <Add />
        <Show
          editing={this.state.editing}
          db={this.state.db}
          click={event => this.handleClick(event)}
          typeEnd={this.typeEndHandler}
        />
      </div>
    );
  }
}

export default firsPage;
