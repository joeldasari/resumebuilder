import React from "react";
import { useNavigate } from "react-router-dom";
const Form = (props) => {
  const { handleChange } = props;
  const navigate = useNavigate();

  const handleBtn = (e) => {
    e.preventDefault();
    navigate("/resume");
  };

  return (
    <div className="App">
      <div className="parent">
        <form onSubmit={handleBtn}>
          <div className="mainTitle">
            <h3>Resume Builder</h3>
          </div>
          <input
            type="text"
            name="Name"
            placeholder="What is your name?"
            onChange={handleChange}
          />
          <input
            type="email"
            name="Email"
            placeholder="Email address"
            onChange={handleChange}
          />
          <input
            type="number"
            name="Phone"
            placeholder="Phone number"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Address"
            placeholder="Enter your address"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Career"
            placeholder="What is your career objective?"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Skills"
            placeholder="What are your skills and abilities?"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Experience"
            placeholder="Work experience"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Education"
            placeholder="Education"
            onChange={handleChange}
          />
          <button type="submit">Create Resume</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
