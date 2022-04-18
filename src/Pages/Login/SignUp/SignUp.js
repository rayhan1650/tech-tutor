import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
  };
  return (
    <div className="my-login mx-auto">
      <h1 className="text-center mt-5 text-primary">Please SignUp</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
      <p className="mt-2 my-link">
        Already have an account? <Link to="/login">Please Login.</Link>{" "}
      </p>

      {/* for social login */}
      <SocialLogin />
    </div>
  );
};

export default SignUp;
