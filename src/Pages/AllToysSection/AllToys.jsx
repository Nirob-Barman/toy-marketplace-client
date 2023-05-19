import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

// Toy data example
// const toyData = [
//     {
//         seller: 'John Doe',
//         toyName: 'Superhero Action Figure',
//         subCategory: 'Action Figures',
//         price: 9.99,
//         quantity: 10,
//     },
//     {
//         seller: 'Jane Smith',
//         toyName: 'Building Blocks',
//         subCategory: 'Educational',
//         price: 19.99,
//         quantity: 5,
//     },
//     {
//         seller: 'Jane Smith',
//         toyName: 'House Blocks',
//         subCategory: 'Educational',
//         price: 19.99,
//         quantity: 5,
//     },
//     {
//         seller: 'Jane Smith',
//         toyName: 'Huge Blocks',
//         subCategory: 'Educational',
//         price: 19.99,
//         quantity: 5,
//     },
//     // Add more toy data here...
// ];

const AllToys = () => {
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

    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value, 10));
    };

    const renderToys = () => {
        return filteredToys.slice(0, limit).map((toy, index) => (
            <tr key={index}>
                <td>{toy.seller}</td>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                    <Link to='/single-toys'>
                        <Button variant="primary">View Details</Button>
                    </Link>
                </td>

            </tr>
        ));
    };

    return (
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
    );
};

export default AllToys;





