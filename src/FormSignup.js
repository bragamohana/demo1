import React,{useState} from "react";
import validate from "./ValidateInfo";
import useForm from "./Useform";
import "./Form.css";
import { Link } from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [username, setusername] = useState('');
  const [email, setemail] = useState("");
  const [title, settitle] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Register as</label>
          <select id="title" name="title">
            <option value="guest"> Guest</option>
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Register
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="/login">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
