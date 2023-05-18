import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={3} md={6}>
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Website Logo" />
                            <h3>Company Name</h3>
                        </div>
                        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5>Contact Information</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1234567890</p>
                        <p>Address: 123 Main Street, City, Country</p>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5>Follow Us</h5>
                        <ul className="social-icons">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/services">Services</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
