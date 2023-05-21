// import React, { useContext, useState } from 'react';
// import { Table, Form, Button, Container, Modal } from 'react-bootstrap';
// import { Link, useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProvider';
// import useTitle from '../../hooks/useTitle';


// const AllToys = () => {

//     useTitle('AllToys');

//     const { user } = useContext(AuthContext);

//     const [searchTerm, setSearchTerm] = useState('');
//     const [limit, setLimit] = useState(20);

//     const toyData = useLoaderData();
//     console.log(toyData);

//     const [filteredToys, setFilteredToys] = useState(toyData);

//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);

//         const filteredToys = toyData.filter((toy) =>
//             toy.toyName.toLowerCase().includes(event.target.value.toLowerCase())
//         );
//         setFilteredToys(filteredToys);
//     };
//     // console.log(filteredToys);

//     const handleLimitChange = (event) => {
//         setLimit(parseInt(event.target.value, 10));
//     };


//     const [showModal, setShowModal] = useState(false);

//     const handleOpenModal = () => {
//         if (user)
//             setShowModal(true);
//         else
//             window.location.href = '/login';
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };


//     const renderToys = () => {
//         return filteredToys.slice(0, limit).map((toy, index) => (
//             <tr
//                 key={index}
//             // key={toy._id}
//             >
//                 <td>{toy.seller}</td>
//                 <td>{toy.name}</td>
//                 <td>{toy.subCategory}</td>
//                 <td>{toy.price}</td>
//                 <td>{toy.quantity}</td>
//                 <td>
//                     <Button onClick={handleOpenModal} variant="primary">View Details</Button>
//                     {
//                         user ? <>
//                             <Modal show={showModal} onHide={handleCloseModal}>
//                                 <Modal.Header closeButton>
//                                     <Modal.Title>Modal Title</Modal.Title>
//                                 </Modal.Header>
//                                 <Modal.Body>
//                                     <div className="d-flex align-items-center mb-3">
//                                         <img src={toy?.pictureUrl} alt={toy.name} className="mr-3" style={{ width: '100px' }} />
//                                         <div>
//                                             <p><strong>Seller: </strong>{toy.sellerName}</p>
//                                             <p><strong>Email: </strong>{toy.sellerEmail}</p>
//                                             <p><strong>Price: </strong>{toy.price}</p>
//                                             <p><strong>Rating: </strong>{toy.rating}</p>
//                                             <p><strong>Available Quantity: </strong>{toy.quantity}</p>
//                                         </div>
//                                     </div>
//                                     <p><strong>Description: </strong>{toy.description}</p>
//                                 </Modal.Body>
//                                 <Modal.Footer>
//                                     <Button variant="secondary" onClick={handleCloseModal}>
//                                         Close
//                                     </Button>

//                                 </Modal.Footer>
//                             </Modal>
//                         </> : <>
//                             {/* <Link to='/login'></Link> */}
//                         </>
//                     }
//                 </td>

//             </tr>
//         ));
//     };

//     return (
//         <Container>
//             <div>
//                 <h1>All Toys</h1>
//                 <Form.Group controlId="search">
//                     <Form.Label>Search:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={searchTerm}
//                         onChange={handleSearch}
//                         placeholder="Enter toy name"
//                     />
//                 </Form.Group>
//                 <Form.Group controlId="limit">
//                     <Form.Label>Show:</Form.Label>
//                     <Form.Control as="select" value={limit} onChange={handleLimitChange}>
//                         <option>10</option>
//                         <option>20</option>
//                         <option>50</option>
//                     </Form.Control>
//                 </Form.Group>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Seller</th>
//                             <th>Toy Name</th>
//                             <th>Sub-category</th>
//                             <th>Price</th>
//                             <th>Available Quantity</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>{renderToys()}</tbody>
//                 </Table>
//             </div>
//         </Container>
//     );
// };

// export default AllToys;

import React, { useState } from 'react';
import { Table, Form, Button, Modal, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {

    useTitle('All Toys');
    const toyData = useLoaderData(); // Load toyData using useLoaderData()

    const [searchTerm, setSearchTerm] = useState('');
    const [displayedToys, setDisplayedToys] = useState(toyData.slice(0, 20));
    const [selectedToy, setSelectedToy] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // Filter toys based on the search term
        const filteredToys = toyData.filter((toy) =>
            toy.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setDisplayedToys(filteredToys.slice(0, 20));
    };

    const handleViewDetails = (toy) => {
        setSelectedToy(toy);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>

            <div>
                <h2>All Toys</h2>

                <Form.Group controlId="searchTerm">
                    <Form.Label>Search by Toy Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter toy name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </Form.Group>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedToys.map((toy) => (
                            <tr key={toy?._id}>
                                <td>{toy?.sellerName}</td>
                                <td>{toy?.name}</td>
                                <td>{toy?.subCategory}</td>
                                <td>{toy?.price}</td>
                                <td>{toy?.quantity}</td>
                                <td>
                                    <Link to={`/singleToys/${toy._id}`}>
                                        <Button variant="primary" onClick={() => handleViewDetails(toy)}>
                                            View Details
                                        </Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <Modal
                    // show={showModal}
                    onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Toy Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedToy && (
                            <div>
                                <p>Seller: {selectedToy.sellerName}</p>
                                <p>Toy Name: {selectedToy.name}</p>
                                <p>Sub-category: {selectedToy.subCategory}</p>
                                <p>Price: {selectedToy.price}</p>
                                <p>Available Quantity: {selectedToy.quantity}</p>
                                <p>Detail Description: {selectedToy.description}</p>
                                {/* Add additional toy details as needed */}
                                <img src={selectedToy.pictureUrl} alt="Toy Image" />
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Container>
    );
};

export default AllToys;
