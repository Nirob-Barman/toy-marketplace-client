import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
    const images = [
        { src: 'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740', alt: 'Image 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { src: 'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740', alt: 'Image 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { src: 'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740', alt: 'Image 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { src: 'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740', alt: 'Image 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        
        // Add more images here
    ];

    return (
        <div className="py-5">

            <Container>
                <h2 className="text-center mb-4">Gallery</h2>
                <Row>
                    {images.map((image, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                            <Card>
                                <Card.Img
                                    src={image.src}
                                    alt={image.alt}
                                    className="img-fluid gallery-image"
                                />
                                <Card.Body>
                                    <Card.Title>{image.alt}</Card.Title>
                                    <Card.Text>{image.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            
        </div>
    );
};

export default Gallery;
