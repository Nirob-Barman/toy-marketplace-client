import React, { useContext, useState } from 'react';
import { Table, Form, Button, Container, Modal } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const AllToys = () => {

    const { user } = useContext(AuthContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [limit, setLimit] = useState(20);

    const toyData = useLoaderData();
    console.log(toyData);

    const [filteredToys, setFilteredToys] = useState(toyData);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);

        const filteredToys = toyData.filter((toy) =>
            toy.toyName.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredToys(filteredToys);
    };
    // console.log(filteredToys);

    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value, 10));
    };


    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        if (user)
            setShowModal(true);
        else
            window.location.href = '/login';
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    const renderToys = () => {
        return filteredToys.slice(0, limit).map((toy, index) => (
            <tr
                key={index}
            // key={toy._id}
            >
                <td>{toy.seller}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                    <Button onClick={handleOpenModal} variant="primary">View Details</Button>
                    {
                        user ? <>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <img src={toy?.pictureUrl} alt={toy.name} className="mr-3" style={{ width: '100px' }} />
                                        <div>
                                            <p><strong>Seller: </strong>{toy.sellerName}</p>
                                            <p><strong>Email: </strong>{toy.sellerEmail}</p>
                                            <p><strong>Price: </strong>{toy.price}</p>
                                            <p><strong>Rating: </strong>{toy.rating}</p>
                                            <p><strong>Available Quantity: </strong>{toy.quantity}</p>
                                        </div>
                                    </div>
                                    <p><strong>Description: </strong>{toy.description}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseModal}>
                                        Close
                                    </Button>
                                    
                                </Modal.Footer>
                            </Modal>
                        </> : <>
                                {/* <Link to='/login'></Link> */}
                        </>
                    }
                </td>

            </tr>
        ));
    };

    return (
        <Container>
            <div>
                <h1>All Toys</h1>
                <Form.Group controlId="search">
                    <Form.Label>Search:</Form.Label>
                    <Form.Control
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Enter toy name"
                    />
                </Form.Group>
                <Form.Group controlId="limit">
                    <Form.Label>Show:</Form.Label>
                    <Form.Control as="select" value={limit} onChange={handleLimitChange}>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </Form.Control>
                </Form.Group>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{renderToys()}</tbody>
                </Table>
            </div>
        </Container>
    );
};

export default AllToys;





