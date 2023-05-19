import React, { useEffect, useState } from 'react';
import { Table, Form, FormControl, Button } from 'react-bootstrap';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     // Fetch the list of toys from the server and update the toys state
    //     // You can make an API request here to retrieve the toys data
    //     const fetchToys = async () => {
    //         // Example API call
    //         const response = await fetch('/api/toys');
    //         const data = await response.json();
    //         setToys(data);
    //     };

    //     fetchToys();
    // }, []);

    // Filter the toys based on the search query
    const filteredToys = toys.filter(toy =>
        toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Show 20 results by default
    const limitedToys = filteredToys.slice(0, 20);

    return (
        <div>
            <h1>All Toys</h1>

            {/* Search input field */}
            <Form>
                <FormControl
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search by Toy Name"
                />
            </Form>

            {/* Table to display the toys */}
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
                {/* <tbody>
                    {limitedToys.map(toy => (
                        <tr key={toy.id}>
                            <td>{toy.seller ? toy.seller : 'N/A'}</td>
                            <td>{toy.name}</td>
                            <td>{toy.subCategory}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>
                                <Button variant="primary">View Details</Button>
                            </td>
                        </tr>
                    ))}
                </tbody> */}
            </Table>
        </div>
    );
};

export default AllToys;
