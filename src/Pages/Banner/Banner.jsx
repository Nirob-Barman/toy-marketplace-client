import React, { useEffect, useRef } from "react";
import { Container, Button, Badge } from 'react-bootstrap';

const Banner = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const containerElement = containerRef.current;
        const computedStyle = getComputedStyle(containerElement);
        const backgroundColor = computedStyle.backgroundColor;
        const colorThreshold = 128; // Threshold for determining dark or light background

        // Get the RGB values of the background color
        const rgbValues = backgroundColor.match(/\d+/g);
        const r = Number(rgbValues[0]);
        const g = Number(rgbValues[1]);
        const b = Number(rgbValues[2]);

        // Calculate the brightness of the background color
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // Set the text color based on the brightness of the background
        const textColor = brightness > colorThreshold ? "black" : "white";
        containerElement.style.color = textColor;
    }, []);

    return (
        <div className="banner">
            <Container ref={containerRef} className="p-4" style={{ border: "1px solid black", background: "linear-gradient(to bottom, #9b59b6, #8e44ad)" }}>
                <div className="d-flex flex-column align-items-center justify-content-center text-center">
                    <h1>Welcome to Toyverse!</h1>
                    <p>
                        <marquee behavior="scroll" direction="left">
                            <span className="text-white">
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
