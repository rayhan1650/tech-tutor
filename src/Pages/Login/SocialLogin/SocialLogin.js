import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {/* {errorElement} */}
      <div className="d-flex flex-column w-75 mx-auto">
        <button
          //   onClick={() => signInWithGoogle()}
          className="btn btn-outline-info rounded-pill fw-bold"
        >
          <FcGoogle className="me-2 fs-4 " /> Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
