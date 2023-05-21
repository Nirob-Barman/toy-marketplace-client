import { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Toast from 'react-bootstrap/Toast';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const LoginPage = () => {

    useTitle('Login');

    const [error, setError] = useState('');

    const [show, setShow] = useState(false);

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');


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

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');

                navigate(from, { replace: true })

            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Container className='my-3'>
                <Row className='justify-content-center'>
                    <Col lg={6}>
                        <h3 className='text-center mt-2'>Please Login</h3>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required className="rounded-pill" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" required className="rounded-pill" />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                            {/* <p className='text-success'>{error}</p> */}
                            {
                                error && <Toast
                                    onClose={() => setShow(false)} show={show} delay={2000} autohide
                                    style={{
                                        position: 'absolute',
                                        top: '32%',
                                        left: '57%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <Toast.Header />

                                    <Toast.Body className='text-danger'>{error}</Toast.Body>
                                </Toast>
                            }

                            <div className='d-flex justify-content-center'>
                                <Button onClick={() => setShow(true)} variant="primary" type="submit" size="lg" className="me-2">
                                    Login
                                </Button>

                                <Button onClick={handleGoogleSignIn} variant="danger" size="lg">
                                    Login with <FaGoogle />
                                </Button>

                            </div>


                            <div className='text-center mt-2'>
                                <Form.Text className="text-secondary">
                                    Don't Have an Account? <Link to="/register">Register</Link>
                                </Form.Text>
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage;