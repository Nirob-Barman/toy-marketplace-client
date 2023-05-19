
import React from 'react';
import { Container, Button, Badge } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <div className="banner-content">
                    <h1>Welcome to Toyverse!</h1>
                    <p>
                        <marquee behavior="scroll" direction="left">
                            <span className="text-primary">
                                <Badge bg="danger">Special Offer:</Badge> Get 20% off on all toys this week! Limited time only.
                            </span>
                        </marquee>
                    </p>
                    <Button variant="primary">Shop Now</Button>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
