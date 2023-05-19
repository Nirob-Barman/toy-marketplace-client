import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CollectorsEditions = () => {

    editions = {
        [
            {
                title: "Limited Edition Red Car",
                description: "Get your hands on this exclusive red toy car with special features.",
                image: "https://example.com/images/red-car.jpg",
            },
            {
                title: "Deluxe Collector's Set",
                description: "Experience the ultimate collection of rare and unique toy cars.",
                image: "https://example.com/images/deluxe-set.jpg",
            }
            // Add more Collector's Editions objects as needed
        ]
    };

    return (
        <Container>
            <h2 className="text-center mb-4">Collector's Editions</h2>
            <Row>
                {editions.map((edition, index) => (
                    <Col key={index} md={6} lg={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={edition.image} alt={edition.title} />
                            <Card.Body>
                                <Card.Title>{edition.title}</Card.Title>
                                <Card.Text>{edition.description}</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CollectorsEditions;
