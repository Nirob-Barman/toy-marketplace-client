import { useState } from 'react';
import { Tab, Nav, Container } from 'react-bootstrap';

const ReactTabs = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Container>
            <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link eventKey="tab1">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tab2">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="tab3">Tab 3</Nav.Link>
                    </Nav.Item>
                </Nav>


                <Tab.Content>
                    <Tab.Pane eventKey="tab1">
                        <h1>Content for Tab 1</h1>
                        <p>This is the content for Tab 1.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab2">
                        <h1>Content for Tab 2</h1>
                        <p>This is the content for Tab 2.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab3">
                        <h1>Content for Tab 3</h1>
                        <p>This is the content for Tab 3.</p>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
};

export default ReactTabs;