import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from '../../../providers/AuthProvider';
const auth = getAuth();

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    // console.log('register page location', location)

    const from = location.state?.from?.pathname || '/';
    // console.log(from);

    const handleRegister = event => {
        event.preventDefault();
        setError();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // console.log(name, photo, email, password)


        // Password validation rules
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        // Check for special characters
        const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialCharacters.test(password)) {
            setError('Password must contain at least one special character.');
            return;
        }

        // Check for uppercase letters
        const uppercaseLetters = /[A-Z]/;
        if (!uppercaseLetters.test(password)) {
            setError('Password must contain at least one uppercase letter.');
            return;
        }

        // Check for lowercase letters
        const lowercaseLetters = /[a-z]/;
        if (!lowercaseLetters.test(password)) {
            setError('Password must contain at least one lowercase letter.');
            return;
        }

        // Check for numbers
        const numbers = /[0-9]/;
        if (!numbers.test(password)) {
            setError('Password must contain at least one number.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);

                updateProfile(createdUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        console.log('user name updated')
                    })
                    .catch(error => {
                        setError(error.message);
                    })

                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.checked);
        setAccepted(event.target.checked)
    }

    return (
        <Container className='my-3'>
            <Row className='justify-content-center'>
                <Col lg={6}>
                    <h3>Please Register</h3>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control className="rounded-pill" type="text" name='name' placeholder="Your Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="rounded-pill" type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="rounded-pill" type="password" name='password' placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control className="rounded-pill" type="text" name='photo' placeholder="Photo URL" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                onClick={handleAccepted}
                                type="checkbox"
                                name="accept"
                                // label="Accept Terms and Conditions"
                                label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>}
                            />
                        </Form.Group>
                        <p className='text-danger'>{error}</p>
                        <Button variant="primary" disabled={!accepted} type="submit">
                            Register
                        </Button>
                        <br />
                        <Form.Text className="text-secondary">
                            Already Have an Account? <Link to="/login">Login</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default Register;