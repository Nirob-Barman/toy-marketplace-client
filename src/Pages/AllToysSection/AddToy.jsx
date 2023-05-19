import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2'

const AddToy = () => {
    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState('');
    const [sellerName, setSellerName] = useState(''); // Assume you have the seller name from the logged-in user
    const [sellerEmail, setSellerEmail] = useState(''); // Assume you have the seller email from the logged-in user
    const [subCategory, setSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new toy object with the form values
        const newToy = {
            pictureUrl,
            name,
            sellerName,
            sellerEmail,
            subCategory,
            price,
            rating,
            quantity,
            description,
        };
        // console.log(newToy);

        fetch('http://localhost:5000/add-toy',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newToy)
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        // Perform the desired action with the new toy object, such as saving it to a database

        // Reset the form fields
        setPictureUrl('');
        setName('');
        setSellerName('');
        setSellerEmail('');
        setSubCategory('');
        setPrice('');
        setRating('');
        setQuantity('');
        setDescription('');
    };

    return (
        <Container>
            <div>
                <h1>Add A Toy</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="pictureUrl">
                        <Form.Label>Picture URL of the toy:</Form.Label>
                        <Form.Control
                            type="text"
                            value={pictureUrl}
                            onChange={(e) => setPictureUrl(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="sellerName">
                        <Form.Label>Seller Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={sellerName}
                            onChange={(e) => setSellerName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="sellerEmail">
                        <Form.Label>Seller Email:</Form.Label>
                        <Form.Control
                            type="email"
                            value={sellerEmail}
                            onChange={(e) => setSellerEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="subCategory">
                        <Form.Label>Sub-category:</Form.Label>
                        <Form.Control
                            type="text"
                            value={subCategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price:</Form.Label>
                        <Form.Control
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="rating">
                        <Form.Label>Rating:</Form.Label>
                        <Form.Control
                            type="text"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="quantity">
                        <Form.Label>Available Quantity:</Form.Label>
                        <Form.Control
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Detail Description:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Toy
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddToy;
