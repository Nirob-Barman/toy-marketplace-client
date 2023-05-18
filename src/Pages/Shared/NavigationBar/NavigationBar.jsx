import React, { useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
// import logo from './path/to/logo.png';

const NavigationBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const location = useLocation();

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    // console.log(user.displayName);
    // console.log(user.photoURL);
    // console.log(user.email);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const handleLogin = () => {
        // Handle login logic here
        // setIsLoggedIn(true);
        // setUsername('John Doe'); 
    };

    const handleLogout = () => {
        // Handle logout logic here
        // setIsLoggedIn(false);
        // setUsername('');
    };

    // const handleUsernameHover = () => {
    //     // Handle username hover behavior here
    //     // For example, show a tooltip or additional information
    // };


    return (
        <div>

            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav align-items-center">
                            <Nav>
                                <Link
                                    title='Delicious'
                                    to="/">
                                    <Image
                                        className=''
                                        // src="https://w7.pngwing.com/pngs/791/461/png-transparent-seed-bank-seed-company-hemp-benih-others-text-wedding-logo.png"
                                        style={{ width: "100%", height: "40px", objectFit: "cover" }}
                                        alt="Delicious" />
                                </Link>
                            </Nav>
                            <Nav className="mx-auto gap-5">
                                <Link to="/" className={`text-decoration-none ${location.pathname === '/' ? 'fs-6 text-uppercase text-danger text-decoration-none' : ''}`}
                                // className={location.pathname === '/' ? 'text-danger text-decoration-none' : ''}
                                >Home</Link>
                                <Link to="/allToys"
                                    className={`text-decoration-none ${location.pathname === '/allToys' ? 'fs-6 text-uppercase text-danger text-decoration-none' : ''}`}
                                // className={location.pathname === '/blog' ? 'text-danger text-decoration-none' : ''}
                                >All Toys</Link>
                                <Link to="/blogs"
                                    className={`text-decoration-none ${location.pathname === '/blogs' ? 'fs-6 text-uppercase text-danger text-decoration-none' : ''}`}
                                // className={location.pathname === '/about' ? 'text-danger text-decoration-none' : ''}
                                >Blogs</Link>
                            </Nav>

                            {/* <Nav className="mx-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/all-toys">All Toys</Nav.Link>
                                <Nav.Link href="/blogs">Blogs</Nav.Link>
                            </Nav> */}

                            <Nav>
                                {user && (
                                    <>
                                        <Nav.Link href="/my-toys">My Toys</Nav.Link>
                                        <Nav.Link href="/add-toy">Add A Toy</Nav.Link>
                                        <Nav.Link className="username" onMouseEnter={() => setUsername('')}>
                                            {username}
                                        </Nav.Link>
                                    </>
                                )}
                            </Nav>

                            <Nav className='gap-2'>
                                {
                                    user &&
                                    <Image
                                        title={user?.displayName}
                                        src={user?.photoURL}
                                        roundedCircle
                                        style={{ width: "50px", height: "50px" }}
                                        alt="profile" fluid />

                                    // <Card.Img
                                    // roundedCircle 
                                    // title={user?.displayName}
                                    // style={{ height: '2.5rem', }}
                                    //  src={user.photoURL} />

                                    // // :
                                    // <FaUser
                                    //     title={user?.displayName}
                                    //     style={{ fontSize: '2rem' }}></FaUser>
                                }

                                {user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

            {/* <Container>
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
                            {user ? (
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
            </Container> */}
        </div>
    );
};

export default NavigationBar;