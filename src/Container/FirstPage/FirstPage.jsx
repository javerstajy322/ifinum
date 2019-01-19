import React from "react";

import "../main.css";
import Title from "../../Components/FirstPage/Title/Title";
import Add from "../../Components/FirstPage/Add/Add";
import Show from "../../Components/FirstPage/Show/Show";

class firsPage extends React.Component {
  state = {
    db: []
  };
  componentWillMount = () => {
    fetch("http://localhost:3000/invoices")
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        this.setState({ db: data });
      })
      .catch(error => console.log("error", error));
  };
  render() {
    return (
      <div className="main">
        <Title />
        <Add />
        {/* переход на создание invoices */}
        <Show db={this.state.db} />
      </div>
    );
  }
}

export default firsPage;
