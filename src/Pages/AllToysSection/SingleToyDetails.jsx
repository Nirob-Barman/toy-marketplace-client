import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleToyDetails = () => {
    const toy = useLoaderData();

    return (
        <Container className="d-flex justify-content-center align-items-center my-5">
            <div className="text-center">
                <Card style={{ width: '18rem', display: 'inline-block' }}>
                    <Card.Img variant="top" src={toy?.picture} />
                    <Card.Body>
                        <Card.Title>{toy?.toyName}</Card.Title>
                        <Card.Text>Seller: {toy?.sellerName}</Card.Text>
                        <Card.Text>Seller Email: {toy?.sellerEmail}</Card.Text>
                        <Card.Text>Price: {toy?.price}</Card.Text>
                        <Card.Text>Rating: {toy?.rating}</Card.Text>
                        <Card.Text>Available Quantity: {toy?.quantity}</Card.Text>
                        <Card.Text>{toy?.description}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default SingleToyDetails;
