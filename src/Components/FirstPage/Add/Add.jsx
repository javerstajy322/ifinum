import React from "react";

import "./Add.css";
import { Link } from "react-router-dom";
import { Page1Text } from "../../../imports/direct/index";

const Add = props => {
  return (
    <div className="Add">
      <div className="content">
        <h3>Actions</h3>
        <Link to={Page1Text.redirect}><button>Add new</button></Link>
        <br />
        {/* actions Add new Форма создания, переход на страницу создания. */}
      </div>
    </div>
  );
};

export default Add;
