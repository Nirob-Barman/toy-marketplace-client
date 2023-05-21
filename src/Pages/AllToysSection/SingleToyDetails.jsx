import React from 'react';
import { Card } from 'react-bootstrap';

const SingleToyDetails = () => {

    const toy = '';

    return (
        <Card style={{ width: '18rem' }}>
            single toy
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
    );
};

export default SingleToyDetails;
