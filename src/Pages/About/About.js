import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container my-about-style">
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="p-3 px-md-5 text-center">
          <img className="rounded-circle" src="profile.jpg" alt="Profile-pic" />
          <h2 className=" mt-2">NUR MD. RAYHAN</h2>
          <div className="bg-dark mb-1" style={{ height: "2px" }}></div>
          <h5>WEB DEVELOPER</h5>
        </div>

        <div className="p-3 p-md-5 text-center ">
          <div>
            <h1 className="display-4 fw-bold">HELLO!</h1>
            <h4>Here's who I am and what I do.</h4>
          </div>
          <hr />

          <div>
            <h3>About Me</h3>
            <p className="my-text-justify">
              I am Nur Md. Rayhan. I have studied Computer Science and
              Engineering from MBSTU. While I was studying in the university I
              firstly introduced to programming. After completed my B.Sc, for
              improving my web development skill, I was admitted to Programming
              Hero web development course.
            </p>
            <p className="my-text-justify">
              I'm highly energetic and motivated person and I love to work as a
              member or a leader of a team. Currently my only goal is to become
              a web developer and I am working hard to fulfill my goal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
