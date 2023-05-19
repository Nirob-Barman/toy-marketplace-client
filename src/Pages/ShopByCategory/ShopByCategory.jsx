import React, { useState } from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';

import toysData from '../../../public/toysData.json';

const ShopByCategoryTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabSelect = (index) => {
        setActiveTab(index);
    };

    return (
        <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
            <Nav variant="tabs" className="mb-4">
                {toysData.map((category, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link eventKey={index}>{category.category}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <Tab.Content>
                {toysData.map((category, index) => (
                    <Tab.Pane key={index} eventKey={index}>
                        <Row>
                            {category.toys.map((toy, toyIndex) => (
                                <Col key={toyIndex} sm={6} md={4}>
                                    <div className="toy">
                                        <img src={toy.picture} alt={toy.name} />
                                        <h3>{toy.name}</h3>
                                        <p>{toy.price}</p>
                                        <p>{toy.rating}</p>
                                        <button>View Details</button>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Tab.Pane>
                ))}
            </Tab.Content>
        </Tab.Container>
    );
};

export default ShopByCategoryTabs;
