import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap'

const Banner = () => {

    const marqueeRef = useRef(null);

    useEffect(() => {
        // Start the marquee animation when the component mounts
        marqueeRef.current.start();
        return () => {
            // Stop the marquee animation when the component unmounts
            marqueeRef.current.stop();
        };
    }, []);

    return (
        <div className="bg-dark py-4">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-white">Welcome to ToyVerse!</h1>
                        <p className="text-white">
                            Discover a world of amazing toys for kids of all ages.
                        </p>
                        <marquee ref={marqueeRef} direction="left" scrollamount="5">
                            <p className="text-white">
                                <Badge bg="danger">Special Offer:</Badge> Get 20% off on all toys this week! Limited time only.
                            </p>
                        </marquee>
                        <p className="text-white">
                            Shop now and bring joy to your little ones!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;