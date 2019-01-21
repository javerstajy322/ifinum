import React from "react";

import "./Add.css";
import { Page2Text } from "../../../imports/direct/index";
import { Link } from "react-router-dom";

class Add extends React.Component {
  state = {
    number: "",
    start_date: "",
    end_date: "",
    comment: ""
  };

  clickHandler = () => {
    this.setState({
      number: "",
      start_date: "",
      end_date: "",
      comment: ""
    });
  };

  onChangeHandler = e => {
    switch (e.currentTarget.name) {
      case "number":
        this.setState({ number: e.target.value });
        break;
      case "start_date":
        this.setState({ start_date: e.target.value });
        break;
      case "end_date":
        this.setState({ end_date: e.target.value });
        break;
      case "comment":
        this.setState({ comment: e.target.value });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="Add">
        <div className="addWrapper">
          <form action="">
            <p>
              <p>Number:</p>
              <input
                type="text"
                name="number"
                value={this.state.number}
                onChange={e => this.onChangeHandler(e)}
              />
            </p>
            <p>
              <p>Invoice Date:</p>
              <input
                type="text"
                name="start_date"
                value={this.state.start_date}
                onChange={e => this.onChangeHandler(e)}
              />
            </p>
            <p>
              <p>Supply Date:</p>
              <input
                type="text"
                name="end_date"
                value={this.state.end_date}
                onChange={e => this.onChangeHandler(e)}
              />
            </p>
            <p className="comment">
              <p>Comment:</p>
              <input
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={e => this.onChangeHandler(e)}
              />
            </p>
            <br />
            <div>
              <button
                className="addbutton"
                onClick={event => {
                  this.props.click(event, this.state);
                  this.setState({
                    number: "",
                    start_date: "",
                    end_date: "",
                    comment: ""
                  });
                }}
              >
                Отправка данных в json.
              </button>
              <Link to={Page2Text.redirect}>
                <button>Переход на главную страницу.</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
