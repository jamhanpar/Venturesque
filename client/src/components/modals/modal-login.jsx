import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const ModalLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef('');
  const passwordConfirmRef = useRef('');
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    // <div id="modal-login" className="modal">
    //   <div className="modal-content">
    //     <h4>Sign up</h4>
    //     <br />
    //     <form id="login-form">
    //       <div className="input-field">
    //         <input id="login-email" type="email" required />
    //         <label htmlFor="login-email">Email address</label>
    //       </div>
    //       <div className="input-field">
    //         <input id="login-password" type="password" required />
    //         <label htmlFor="login-password">Password</label>
    //       </div>
    //       <button className="">Login</button>
    //     </form>
    //   </div>
    // </div>

    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100 text-center"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account?{" "}
        <Link className="" to="/auth/signup">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default ModalLogin;
