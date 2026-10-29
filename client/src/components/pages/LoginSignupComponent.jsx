import React from "react";
import { AuthForm } from '../AuthForm';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export const LoginSignupComponent = () => {
    const { toggle } = useParams();
    
    return (
      <section>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <AuthForm toggle={ toggle } />
        </Container>
      </section>
    );
};
