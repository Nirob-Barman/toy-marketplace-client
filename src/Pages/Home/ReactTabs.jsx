import React, { useState } from 'react';
import { Tab, Nav, Card, Button } from 'react-bootstrap';

const MyTabs = () => {
    const [activeTab, setActiveTab] = useState('mathToys');

    const handleTabSelect = (tabId) => {
        setActiveTab(tabId);
    };

    // Toy data in JSON format
    const toysData = {
        mathToys: [
            {
                id: 1,
                // name: 'Toy 1',
                image: 'toy1.jpg',
                price: 19.99,
                rating: 4.5,
            },
            {
                id: 2,
                // name: 'Toy 2',
                image: 'toy2.jpg',
                price: 24.99,
                rating: 4.2,
            },
        ],
        languageToys: [
            {
                id: 3,
                // name: 'Toy 3',
                image: 'toy3.jpg',
                price: 14.99,
                rating: 4.0,
            },
            {
                id: 4,
                // name: 'Toy 4',
                image: 'toy4.jpg',
                price: 29.99,
                rating: 4.8,
            },
        ],
        scienceToys: [
            {
                id: 5,
                // name: 'Toy 5',
                image: 'toy5.jpg',
                price: 17.99,
                rating: 4.3,
            },
            {
                id: 6,
                // name: 'Toy 6',
                image: 'toy6.jpg',
                price: 21.99,
                rating: 4.6,
            },
        ],
    };

    return (
        <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
            <Nav variant="pills">
                <Nav.Item>
                    <Nav.Link eventKey="mathToys">Math Toys</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="languageToys">Language Toys</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="scienceToys">Science Toys</Nav.Link>
                </Nav.Item>
            </Nav>

            {/* <Tab.Content>
                {Object.keys(toysData).map((tabKey) => (
                    <Tab.Pane key={tabKey} eventKey={tabKey}>
                        <h3>{tabKey === 'mathToys' ? 'Math Toys' : tabKey === 'languageToys' ? 'Language Toys' : 'Science Toys'}</h3>
                        {toysData[tabKey].map((toy) => (
                            <Card key={toy.id}>
                                <Card.Img variant="top" src={toy.image} />
                                <Card.Body>
                                    <Card.Title>{toy.name}</Card.Title>
                                    <Card.Text>
                                        Price: ${toy.price}<br />
                                        Rating: {toy.rating}
                                    </Card.Text>
                                    <Button variant="primary">View Details</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Tab.Pane>
                ))}
            </Tab.Content> */}

            <Tab.Content>
                {Object.entries(toysData).map(([tabKey, toys]) => (
                    <Tab.Pane key={tabKey} eventKey={tabKey}>
                        <h3>{tabKey === 'mathToys' ? 'Math Toys' : tabKey === 'languageToys' ? 'Language Toys' : 'Science Toys'}</h3>
                        {toys.map((toy) => (
                            <Card key={toy.id}>
                                {/* <Card.Img variant="top" src={toy.image} /> */}
                                <Card.Body>
                                    <Card.Title>{toy.name}</Card.Title>
                                    <Card.Text>
                                        Price: ${toy.price}<br />
                                        Rating: {toy.rating}
                                    </Card.Text>
                                    <Button variant="primary">View Details</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tab.Container>
    );
};

export default MyTabs;
