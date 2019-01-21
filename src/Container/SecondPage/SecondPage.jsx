import React from "react";

import "../main.css";

import Title from "../../Components/SecondPage/Title/Title";
import Add from "../../Components/SecondPage/Add/Add";
import "../../Components/SecondPage/Add/Add.css";

class secondPage extends React.Component {
  state = {
    db: []
  };

  fetchPOST = async props => {
    await fetch("http://localhost:3000/invoices", {
      method: "POST",
      body: JSON.stringify({
        number: props.number,
        start_date: props.start_date,
        end_date: props.end_date,
        comment: props.comment
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());
  };

  clickHandler = (e, props) => {
    e.preventDefault();
    console.log(props);
    this.fetchPOST(props);
  };

  render() {
    return (
      <div className="main">
        <Title />
        <Add click={this.clickHandler} />
      </div>
    );
  }
}
export default secondPage;
