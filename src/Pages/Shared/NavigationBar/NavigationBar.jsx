import React, { useContext } from 'react';
import { Button, Card, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
// import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const location = useLocation();

    // const { user, logOut } = useContext(AuthContext);
    const user = 'Somethings';
    
    // console.log(user);
    // console.log(user.displayName);
    // console.log(user.photoURL);
    // console.log(user.email);
    
    const handleLogOut = () => {
        // logOut()
        //     .then()
        //     .catch(error => console.log(error));
    }


    return (
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
                                    src="https://w7.pngwing.com/pngs/791/461/png-transparent-seed-bank-seed-company-hemp-benih-others-text-wedding-logo.png"
                                    style={{ width: "100%", height: "40px", objectFit: "cover" }}
                                    alt="Delicious" />
                            </Link>
                        </Nav>
                        <Nav className="mx-auto gap-5">
                            <Link to="/" className={`text-decoration-none ${location.pathname === '/' ? 'fs-6 text-uppercase text-danger text-decoration-none' : ''}`}
                            // className={location.pathname === '/' ? 'text-danger text-decoration-none' : ''}
                            >Home</Link>
                            <Link to="/blog"
                                className={`text-decoration-none ${location.pathname === '/blog' ? 'fs-6 text-uppercase text-danger text-decoration-none' : ''}`}
                            // className={location.pathname === '/blog' ? 'text-danger text-decoration-none' : ''}
                            >Blog</Link>
                            <Link to="/about"
                                className={`text-decoration-none ${location.pathname === '/about' ? 'fs-6 text-uppercase text-danger text-decoration-none' : ''}`}
                            // className={location.pathname === '/about' ? 'text-danger text-decoration-none' : ''}
                            >About</Link>
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
    );
};

export default NavigationBar;