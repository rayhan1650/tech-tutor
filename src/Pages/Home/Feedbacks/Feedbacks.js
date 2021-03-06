import React, { useEffect, useState } from "react";
import Feedback from "../Feedback/Feedback";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("feedback.json")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary display-4 fw-bold">
        Student's Feedback
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {feedbacks.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
