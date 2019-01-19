import React from "react";

import "../main.css";

import { Page2Text } from "../../imports/direct/index";
import { Link } from "react-router-dom";

import Title from "../../Components/SecondPage/Title/Title";
import "../../Components/SecondPage/Add/Add.css";

class secondPage extends React.Component {
  state = {
    db: [],
    number: "",
    start_date: "",
    end_date: "",
    comment: ""
  };

  fetchPOST = () => {
    fetch("http://localhost:3000/invoices", {
      method: "POST",
      body: JSON.stringify({
        date_created: this.state.start_date,
        number: this.state.number,
        date_supply: this.state.end_date,
        comment: this.state.comment
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());
  };

  clickHandler = e => {
    e.preventDefault();
    this.fetchPOST();
    this.setState({
      number: "",
      start_date: "",
      end_date: "",
      comment: ""
    });
  };

  onChangeHandler = e => {
    if (e.currentTarget.name === "number") {
      this.setState({ number: e.target.value });
    }
    if (e.currentTarget.name === "start_date") {
      this.setState({ start_date: e.target.value });
    }
    if (e.currentTarget.name === "end_date") {
      this.setState({ end_date: e.target.value });
    }
    if (e.currentTarget.name === "comment") {
      this.setState({ comment: e.target.value });
    }
  };

  render() {
    return (
      <div className="main">
        <Title />
        <div className="Add">
          <div className="addWrapper">
            <form action="">
              <p>
                <p>Number:</p>
                <input
                  type="text"
                  name="number"
                  id=""
                  value={this.state.number}
                  onChange={e => this.onChangeHandler(e)}
                />
              </p>
              <p>
                <p>Invoice Date:</p>
                <input
                  type="text"
                  name="start_date"
                  id=""
                  value={this.state.start_date}
                  onChange={e => this.onChangeHandler(e)}
                />
              </p>
              <p>
                <p>Supply Date:</p>
                <input
                  type="text"
                  name="end_date"
                  id=""
                  value={this.state.end_date}
                  onChange={e => this.onChangeHandler(e)}
                />
              </p>
              <p className="comment">
                <p>Comment:</p>
                <input
                  type="text"
                  name="comment"
                  id=""
                  value={this.state.comment}
                  onChange={e => this.onChangeHandler(e)}
                />
              </p>
              <br />
              <div>
                <button className="addbutton" onClick={this.clickHandler}>
                  Отправка данных в json.
                </button>
                <Link to={Page2Text.redirect}>
                  <button>Переход на главную страницу.</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default secondPage;
