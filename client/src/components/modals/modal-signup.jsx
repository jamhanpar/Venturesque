import React, { useState, useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const ModalSignup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
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
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    // <div id="modal-signup" className="modal">
    //   <div className="modal-content">
    //     <h4>Sign up</h4>
    //     <br />
    //     {error && <div>{error}</div>}
    //     <form id="signup-form" onSubmit={handleSubmit}>
    //       <div className="input-field">
    //         <input id="signup-email" type="email" ref={emailRef} required />
    //         <label htmlFor="signup-email">Email address</label>
    //       </div>
    //       <div className="input-field">
    //         <input
    //           id="signup-password"
    //           type="password"
    //           ref={passwordRef}
    //           required
    //         />
    //         <label htmlFor="signup-password">Password</label>
    //       </div>
    //       <div className="input-field">
    //         <input
    //           id="signup-password"
    //           type="password"
    //           ref={passwordConfirmRef}
    //           required
    //         />
    //         <label htmlFor="signup-password">Password</label>
    //       </div>
    //       <button disabled={loading} className="" type="submit">
    //         Sign up
    //       </button>
    //     </form>
    //   </div>
    // </div>

    // BOOTSTRAP ALTERNATIVE
    // <>
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4">Sign Up</h2>
    //       <Form>
    //         <Form.Group className="mb-3" id="email">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control type="email" ref={emailRef} required />
    //         </Form.Group>
    //         <Form.Group id="password">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" ref={passwordRef} required />
    //         </Form.Group>
    //         <Form.Group id="password-confirm">
    //           <Form.Label>Password Confirmation</Form.Label>
    //           <Form.Control type="password" ref={passwordConfirmRef} required />
    //         </Form.Group>
    //         <Button className="w-100" type="submit">
    //           Sign Up
    //         </Button>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     <p>Already have an account? Log In</p>
    //   </div>
    // </>

    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {currentUser && currentUser.email}
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100 text-center"
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account?{" "}
        <Link className="" to="/auth/login">
          Login
        </Link>
      </div>
    </>
  );
};

export default ModalSignup;
