import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import notFoundImage from '../../assets/notFoundImage.png';

const ErrorPage = () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <Container fluid className="not-found-page my-5">
            <Row className="justify-content-center align-items-center">
                <Col xs={10} sm={8} md={6} lg={4} className="text-center">
                    <h1>404 Error</h1>
                    <p>Oops! The page you're looking for doesn't exist.</p>
                    <p>URL: <strong>{window.location.href}</strong></p>
                    <img src={notFoundImage} alt="404 Image" className="img-fluid" />
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                        <Button variant="outline-primary" onClick={handleGoBack}>Go to Previous Page</Button>
                        <Button variant="outline-primary" href="/">Go to Homepage</Button>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default ErrorPage;