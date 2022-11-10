import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h2 style={{ color: "white", textAlign: "center", paddingTop: "30px" }}>
        {" "}
        THANK YOU FOR REGISTERING
        <br />
        CLICK HERE TO GO TO HOME PAGE!
      </h2>

      <Link to="/">
        <button
          className="form-input-success"
          type="submit"
          style={{ color: "white", paddingLeft: "30px" }}
        >
          HERE!
        </button>
      </Link>
    </div>
  );
};

export default FormSuccess;
