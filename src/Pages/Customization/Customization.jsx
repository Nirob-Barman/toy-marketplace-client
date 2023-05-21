import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Button, Image } from "react-bootstrap";

const Customization = () => {
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedPattern, setSelectedPattern] = useState("");
    const [selectedDecal, setSelectedDecal] = useState("");
    const [selectedAccessories, setSelectedAccessories] = useState([]);

    // Function to handle color selection
    const handleColorSelection = (color) => {
        setSelectedColor(color);
    };

    // Function to handle pattern selection
    const handlePatternSelection = (pattern) => {
        setSelectedPattern(pattern);
    };

    // Function to handle decal selection
    const handleDecalSelection = (decal) => {
        setSelectedDecal(decal);
    };

    // Function to handle accessories selection
    const handleAccessoriesSelection = (accessory) => {
        // Check if the accessory is already selected, remove it; otherwise, add it
        if (selectedAccessories.includes(accessory)) {
            setSelectedAccessories(selectedAccessories.filter((item) => item !== accessory));
        } else {
            setSelectedAccessories([...selectedAccessories, accessory]);
        }
    };

    return (
        <Container className="my-5 py-5">
            <h2 className="text-center mb-4">Customize Your Toy Car</h2>
            <Row className="mb-4">
                <Col md={6} className="mb-2">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="color-dropdown">
                            {selectedColor ? `Selected Color: ${selectedColor}` : "Select Color"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleColorSelection("Red")}>Red</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleColorSelection("Blue")}>Blue</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleColorSelection("Green")}>Green</Dropdown.Item>
                            {/* Add more color options */}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md={6} className="mb-2">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="pattern-dropdown">
                            {selectedPattern ? `Selected Pattern: ${selectedPattern}` : "Select Pattern"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handlePatternSelection("Stripes")}>Stripes</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePatternSelection("Dots")}>Dots</Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePatternSelection("Checkered")}>Checkered</Dropdown.Item>
                            {/* Add more pattern options */}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={6} className="mb-2">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="decal-dropdown">
                            {selectedDecal ? `Selected Decal: ${selectedDecal}` : "Select Decal"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleDecalSelection("Flames")}>Flames</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDecalSelection("Stars")}>Stars</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDecalSelection("Racing Stripes")}>Racing Stripes</Dropdown.Item>
                            {/* Add more decal options */}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md={6} className="mb-2">
                    <Button
                        variant={selectedAccessories.includes("Spoilers") ? "primary" : "outline-primary"}
                        className="mr-2"
                        onClick={() => handleAccessoriesSelection("Spoilers")}
                    >
                        Spoilers
                    </Button>
                    <Button
                        variant={selectedAccessories.includes("Rims") ? "primary" : "outline-primary"}
                        className="mr-2"
                        onClick={() => handleAccessoriesSelection("Rims")}
                    >
                        Rims
                    </Button>
                    <Button
                        variant={selectedAccessories.includes("Lights") ? "primary" : "outline-primary"}
                        className="mr-2"
                        onClick={() => handleAccessoriesSelection("Lights")}
                    >
                        Lights
                    </Button>
                    {/* Add more accessory buttons */}
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h4>Preview:</h4>
                    <div className="d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                background: selectedColor || "gray",
                                border: "2px solid black",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    background: selectedPattern || "white",
                                    border: "2px solid black",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Image src="https://img.freepik.com/premium-photo/funny-illustrated-car-painted-rainbow-colors_183364-23794.jpg?w=740" alt="Toy Car" style={{ width: "60px", height: "60px" }} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <h4>Selected Accessories:</h4>
                    <ul>
                        {selectedAccessories.map((accessory, index) => (
                            <li key={index}>{accessory}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Customization;
