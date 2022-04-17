import React from "react";
import "./Home.css";
import Feedbacks from "../Feedbacks/Feedbacks";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <div
        className="my-banner d-flex justify-content-center align-items-center img-fluid"
        style={{ backgroundImage: `url("Cover.jpg")` }}
      >
        <h1 className="text-white   fw-bold">
          LEARN NEW THINGS <br /> IN COMFORT OF YOUR HOME
        </h1>
      </div>

      <Services />
      <Feedbacks />
    </div>
  );
};

export default Home;
