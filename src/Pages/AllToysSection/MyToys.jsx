import React, { useContext, useEffect, useState } from 'react';
import { Table, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {

    useTitle('MyToys');

    const { user } = useContext(AuthContext);

    // console.log(user);

    const [toys, setToys] = useState([]);
    // const [show, setShow] = useState(false);
    // const [toy, setToy] = useState({});

    const url = `https://toy-marketplace-server-bay.vercel.app/toys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log('EffectData', data);
                setToys(data);
            })
            .catch(err => console.log(err));
    }, [url])




    const initialToyData = useLoaderData();
    const [toyData, setToyData] = useState(initialToyData);

    // console.log(toyData);

    const [showModal, setShowModal] = useState(false);
    const [updatedToyData, setUpdatedToyData] = useState(null);

    console.log(initialToyData);
    // const toys = useLoaderData();
    // console.log(toys);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);

        if (updatedToyData) {
            setToyData(updatedToyData);
            setUpdatedToyData(null);
        }
    };




    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;
        const _id = form._id.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = { price, quantity, description };
        console.log(updatedToy);

        // send data to the server
        fetch(`https://toy-marketplace-server-bay.vercel.app/toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedToy),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Updated Data inserted into database', data);



                if (data.modifiedCount > 0) {

                    // setTimeout(() => {
                    //     setUpdatedToyData(updatedToy);
                    //     handleCloseModal();
                    // }, 1000);

                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });


        setTimeout(() => {
            setUpdatedToyData(updatedToy);
            handleCloseModal();
        }, 1000);

        handleCloseModal();
    };


    const handleDeleteToy = (toyId) => {
        console.log('Delete it', toyId);
        // Ask for delete confirmation
        // if (window.confirm('Are you sure you want to delete this toy?')) {
        //     // Filter out the selected toy from the toys array
        //     const updatedToys = toys.filter((toy) => toy.id !== toyId);

        //     // Update the toys state with the updated array
        //     setToys(updatedToys);
        // }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://toy-marketplace-server-bay.vercel.app/toys/${toyId}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    // 'Your toy has been deleted.',
                                    'Success'
                                )
                                // const remaining = coffees.filter(cof => cof._id !== _id);
                                // setCoffees(remaining);
                            }
                        })

                }
            })

    };

    return (
        <div>

            {/* <Container>
                hello {user.email}
                {
                    toys.map(toy => <p>
                        {toy.name}
                    </p>)
                }
            </Container> */}

            <Container>
                <div>
                    <h1>My Toys</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialToyData.map((toy) => (
                                <tr key={toy._id}>
                                    <td>{toy.name}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td>{toy.description}</td>
                                    <td>
                                        {/* <Link
                                        // to={toy._id}
                                    >
                                        <Button
                                            variant="primary"
                                            onClick={() => handleUpdateToy(toy._id)}
                                        >
                                            Update
                                        </Button>
                                    </Link> */}

                                        <>
                                            <Button onClick={handleOpenModal}>Update</Button>

                                            <Modal show={showModal} onHide={handleCloseModal}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>{toy.name}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>

                                                    <div className="bg-[#F4F3F0] p-24">
                                                        <h2 className="text-3xl font-extrabold">Update Toys: {toy.name}</h2>
                                                        <Form
                                                            // onSubmit={(event) => handleUpdate(event, toy._id)}
                                                            onSubmit={handleUpdate}
                                                        >
                                                            {/* form name and quantity row */}
                                                            <div className="md:flex mb-8">
                                                                <div className="form-control md:w-1/2 ml-4">
                                                                    <Form.Label>Id</Form.Label>
                                                                    <Form.Control type="text" name="_id" defaultValue={toy._id} disabled placeholder="Available Quantity" />
                                                                </div>
                                                                <div className="form-control md:w-1/2 ml-4">
                                                                    <Form.Label>Price</Form.Label>
                                                                    <Form.Control type="text" name="price" defaultValue={toy.price} placeholder="Price" />
                                                                </div>
                                                                <div className="form-control md:w-1/2 ml-4">
                                                                    <Form.Label>Available Quantity</Form.Label>
                                                                    <Form.Control type="text" name="quantity" defaultValue={toy.quantity} placeholder="Available Quantity" />
                                                                </div>
                                                                <div className="form-control md:w-1/2 ml-4">
                                                                    <Form.Label>Description</Form.Label>
                                                                    <Form.Control type="text" name="description" defaultValue={toy.description} placeholder="Description" />
                                                                </div>
                                                            </div>
                                                            <Button type="submit">Update Toys</Button>
                                                        </Form>
                                                    </div>

                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleCloseModal}>
                                                        Close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </>


                                        {' '}

                                        <Link
                                        // to={toy._id}
                                        >
                                            <Button
                                                variant="danger"
                                                onClick={() => handleDeleteToy(toy._id)}
                                            >
                                                Delete
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>

    );
};

export default MyToys;
