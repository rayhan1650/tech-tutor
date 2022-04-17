import React from "react";
import "./Feedback.css";

const Feedback = ({ feedback }) => {
  const { name, text, img } = feedback;
  return (
    <div className="col">
      <div className="card shadow">
        <div className="d-flex bg-primary bg-opacity-10  align-items-center p-2">
          <img src={img} className="user-profile-pic" alt="User profile" />
          <h5 className="card-title ms-3">{name}</h5>
        </div>

        <div className="card-body">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
