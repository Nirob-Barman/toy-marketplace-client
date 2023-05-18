import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import logo from './path/to/logo.png';

const NavigationBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        setIsLoggedIn(true);
        setUsername('John Doe'); // Replace with the actual username
    };

    const handleLogout = () => {
        // Handle logout logic here
        setIsLoggedIn(false);
        setUsername('');
    };

    const handleUsernameHover = () => {
        // Handle username hover behavior here
        // For example, show a tooltip or additional information
    };


    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        // src={logo}
                        alt="Website Logo" className="navbar-logo" />
                    Website Name
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/all-toys">All Toys</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {isLoggedIn ? (
                            <>
                                <Nav.Link href="/my-toys">My Toys</Nav.Link>
                                <Nav.Link href="/add-toy">Add A Toy</Nav.Link>
                                <Nav.Link className="username" onMouseEnter={() => setUsername('')}>
                                    {username}
                                </Nav.Link>
                                <Button variant="outline-primary" onClick={handleLogout}>Logout</Button>
                            </>
                        ) : (
                                <Link to="/login"><Button variant="primary" onClick={handleLogin}>Login</Button></Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;