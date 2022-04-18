import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [sendPasswordResetEmail, sending, passwordResetError] =
    useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="my-login mx-auto">
      <h1 className="text-center mt-5 text-primary">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {error ? <p className="text-danger">Error: {error.message}</p> : <p></p>}
      <p className="mt-2 my-link">
        New to Tech Tutor? <Link to="/signup">Please SignUp.</Link>{" "}
      </p>
      {passwordResetError ? (
        <p className="text-danger">Error: {passwordResetError.message}</p>
      ) : (
        <p></p>
      )}
      <p className="mt-2 my-link">
        Forget Password?
        <button
          onClick={async () => {
            const email = emailRef.current.value;
            await sendPasswordResetEmail(email);
            if (email) {
              toast("Sent email");
            }
          }}
          className="border-0 text-primary bg-transparent"
        >
          Reset password
        </button>{" "}
      </p>

      {/* for social login */}
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
