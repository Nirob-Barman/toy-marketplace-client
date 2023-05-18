import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <div className="login-form">
                        <h2>Login</h2>
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" />
                            </Form.Group>

                            <Button variant="primary" onClick={handleLogin}>Login</Button>
                            <Button variant="secondary" className="google-login">Google Sign-in</Button>
                        </Form>

                        <div className="register-link">
                            Don't have an account? <Link to="/register">Register here</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
