import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, text, price } = service;
  return (
    <div className="col">
      <div className="card rounded-3 shadow">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <span className="badge bg-success">Price: ${price}</span>
          <p className="card-text my-text-justify my-2">{text}</p>
          <Link to="/checkout">
            <button className="btn btn-primary mt-3">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
