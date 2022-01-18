import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import ModalSignup from "../modals/modal-signup";
import ModalLogin from "../modals/modal-login";

export const LoginSignup = () => {
  const { toggle } = useParams();

  return (
    <section>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {toggle === "signup" ? <ModalSignup /> : <ModalLogin />}
        </div>
      </Container>
    </section>
  );
};
