import React from 'react';
import { Tab, Tabs, Card, Button } from 'react-bootstrap';
import toyData from '../../../public/toyData.json';

const ShopByCategory = () => {
    return (
        <Tabs defaultActiveKey={toyData.categories[0].name} id="category-tabs">
            {toyData.categories.map((category) => (
                <Tab key={category.name} eventKey={category.name} title={category.name}>
                    {category.toys.map((toy) => (
                        <Card key={toy.name}>
                            <Card.Img
                                style={{ width: '200px', height: '150px' }}
                                variant="top" src={toy.picture} />
                            <Card.Body>
                                <Card.Title>{toy.name}</Card.Title>
                                <Card.Text>Price: {toy.price}</Card.Text>
                                <Card.Text>Rating: {toy.rating}</Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Tab>
            ))}
        </Tabs>
    );
};

export default ShopByCategory;
