// import React, { useContext, useEffect, useState } from 'react';
// import { Table, Button, Container, Modal, Form } from 'react-bootstrap';
// import { Link, useLoaderData } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../../providers/AuthProvider';
// import useTitle from '../../hooks/useTitle';

// const MyToys = () => {

//     useTitle('MyToys');

//     const { user } = useContext(AuthContext);

//     // console.log(user);

//     const [toys, setToys] = useState([]);
//     // const [show, setShow] = useState(false);
//     // const [toy, setToy] = useState({});

//     const url = `https://toy-marketplace-server-bay.vercel.app/toys?email=${user.email}`
//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(data => {
//                 console.log('EffectData', data);
//                 setToys(data);
//             })
//             .catch(err => console.log(err));
//     }, [url])




//     const initialToyData = useLoaderData();
//     const [toyData, setToyData] = useState(initialToyData);

//     // console.log(toyData);

//     const [showModal, setShowModal] = useState(false);
//     const [updatedToyData, setUpdatedToyData] = useState(null);

//     console.log(initialToyData);
//     // const toys = useLoaderData();
//     // console.log(toys);

//     const handleOpenModal = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);

//         if (updatedToyData) {
//             setToyData(updatedToyData);
//             setUpdatedToyData(null);
//         }
//     };




//     const handleUpdate = (event) => {
//         event.preventDefault();

//         const form = event.target;
//         const _id = form._id.value;
//         const price = form.price.value;
//         const quantity = form.quantity.value;
//         const description = form.description.value;

//         const updatedToy = { price, quantity, description };
//         console.log(updatedToy);

//         // send data to the server
//         fetch(`https://toy-marketplace-server-bay.vercel.app/toys/${_id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify(updatedToy),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log('Updated Data inserted into database', data);



//                 if (data.modifiedCount > 0) {

//                     // setTimeout(() => {
//                     //     setUpdatedToyData(updatedToy);
//                     //     handleCloseModal();
//                     // }, 1000);

//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Updated Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool',
//                     });
//                 }
//             });


//         setTimeout(() => {
//             setUpdatedToyData(updatedToy);
//             handleCloseModal();
//         }, 1000);

//         handleCloseModal();
//     };


//     const handleDeleteToy = (toyId) => {
//         console.log('Delete it', toyId);
//         // Ask for delete confirmation
//         // if (window.confirm('Are you sure you want to delete this toy?')) {
//         //     // Filter out the selected toy from the toys array
//         //     const updatedToys = toys.filter((toy) => toy.id !== toyId);

//         //     // Update the toys state with the updated array
//         //     setToys(updatedToys);
//         // }

//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         })
//             .then((result) => {
//                 if (result.isConfirmed) {
//                     fetch(`https://toy-marketplace-server-bay.vercel.app/toys/${toyId}`, {
//                         method: 'DELETE'
//                     })
//                         .then(res => res.json())
//                         .then(data => {
//                             console.log(data);
//                             if (data.deletedCount > 0) {
//                                 Swal.fire(
//                                     'Deleted!',
//                                     // 'Your toy has been deleted.',
//                                     'Success'
//                                 )
//                                 // const remaining = coffees.filter(cof => cof._id !== _id);
//                                 // setCoffees(remaining);
//                             }
//                         })

//                 }
//             })

//     };

//     return (
//         <div>

//             {/* <Container>
//                 hello {user.email}
//                 {
//                     toys.map(toy => <p>
//                         {toy.name}
//                     </p>)
//                 }
//             </Container> */}

//             <Container>
//                 <div>
//                     <h1>My Toys</h1>
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Price</th>
//                                 <th>Quantity</th>
//                                 <th>Description</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {initialToyData.map((toy) => (
//                                 <tr key={toy._id}>
//                                     <td>{toy.name}</td>
//                                     <td>{toy.price}</td>
//                                     <td>{toy.quantity}</td>
//                                     <td>{toy.description}</td>
//                                     <td>
//                                         {/* <Link
//                                         // to={toy._id}
//                                     >
//                                         <Button
//                                             variant="primary"
//                                             onClick={() => handleUpdateToy(toy._id)}
//                                         >
//                                             Update
//                                         </Button>
//                                     </Link> */}

//                                         <>
//                                             <Button onClick={handleOpenModal}>Update</Button>

//                                             <Modal show={showModal} onHide={handleCloseModal}>
//                                                 <Modal.Header closeButton>
//                                                     <Modal.Title>{toy.name}</Modal.Title>
//                                                 </Modal.Header>
//                                                 <Modal.Body>

//                                                     <div className="bg-[#F4F3F0] p-24">
//                                                         <h2 className="text-3xl font-extrabold">Update Toys: {toy.name}</h2>
//                                                         <Form
//                                                             // onSubmit={(event) => handleUpdate(event, toy._id)}
//                                                             onSubmit={handleUpdate}
//                                                         >
//                                                             {/* form name and quantity row */}
//                                                             <div className="md:flex mb-8">
//                                                                 <div className="form-control md:w-1/2 ml-4">
//                                                                     <Form.Label>Id</Form.Label>
//                                                                     <Form.Control type="text" name="_id" defaultValue={toy._id} disabled placeholder="Available Quantity" />
//                                                                 </div>
//                                                                 <div className="form-control md:w-1/2 ml-4">
//                                                                     <Form.Label>Price</Form.Label>
//                                                                     <Form.Control type="text" name="price" defaultValue={toy.price} placeholder="Price" />
//                                                                 </div>
//                                                                 <div className="form-control md:w-1/2 ml-4">
//                                                                     <Form.Label>Available Quantity</Form.Label>
//                                                                     <Form.Control type="text" name="quantity" defaultValue={toy.quantity} placeholder="Available Quantity" />
//                                                                 </div>
//                                                                 <div className="form-control md:w-1/2 ml-4">
//                                                                     <Form.Label>Description</Form.Label>
//                                                                     <Form.Control type="text" name="description" defaultValue={toy.description} placeholder="Description" />
//                                                                 </div>
//                                                             </div>
//                                                             <Button type="submit">Update Toys</Button>
//                                                         </Form>
//                                                     </div>

//                                                 </Modal.Body>
//                                                 <Modal.Footer>
//                                                     <Button variant="secondary" onClick={handleCloseModal}>
//                                                         Close
//                                                     </Button>
//                                                 </Modal.Footer>
//                                             </Modal>
//                                         </>


//                                         {' '}

//                                         <Link
//                                         // to={toy._id}
//                                         >
//                                             <Button
//                                                 variant="danger"
//                                                 onClick={() => handleDeleteToy(toy._id)}
//                                             >
//                                                 Delete
//                                             </Button>
//                                         </Link>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </Table>
//                 </div>
//             </Container>
//         </div>

//     );
// };

// export default MyToys;






import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {

    useTitle('MyToys');
    const { user } = useContext(AuthContext);

    const [toys, setToys] = useState([]);
    const [editingToy, setEditingToy] = useState(null);
    const [updatedPrice, setUpdatedPrice] = useState("");
    const [updatedQuantity, setUpdatedQuantity] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");

    // const toysData = useLoaderData();
    const [toysData, setToysData] = useState([]);
    useEffect(() => {
        fetch(`https://toy-marketplace-server-bay.vercel.app/toys`)
            .then((res) => res.json())
            .then((data) => {
                const myToys = data.filter((toy) => toy.sellerEmail == user.email);
                setToysData(myToys);
                // console.log(data);
                // console.log(user.email);

            });
    }, []);

    useEffect(() => {
        if (toysData) {
            setToys(toysData);
        }
    }, [toysData]);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `https://toy-server-plum.vercel.app/toys/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (response.ok) {
                setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
                // alert("Toy deleted successfully!");
                Swal.fire(
                    'Deleted!',
                    'Success'
                )
            } else {
                throw new Error("Failed to delete toy");
            }
        } catch (error) {
            console.error("Failed to delete toy:", error);
            alert("Failed to delete toy. Please try again.");
        }
    };

    const handleUpdateToyData = (toy) => {
        setEditingToy(toy);
        setUpdatedPrice(toy.price);
        setUpdatedQuantity(toy.quantity);
        setUpdatedDescription(toy.description);
    };

    const handleUpdate = async (id) => {
        try {
            const response = await fetch(
                `https://toy-server-plum.vercel.app/toys/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        price: updatedPrice,
                        quantity: updatedQuantity,
                        description: updatedDescription,
                    }),
                }
            );
            if (response.ok) {
                setToys((prevToys) =>
                    prevToys.map((toy) =>
                        toy._id === id
                            ? {
                                ...toy,
                                price: updatedPrice,
                                quantity: updatedQuantity,
                                description: updatedDescription,
                            }
                            : toy
                    )
                );
                setEditingToy(null);
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            } else {
                throw new Error("Failed to update toy");
            }
        } catch (error) {
            console.error("Failed to update toy:", error);
            alert("Failed to update. Please try again.");
        }
    };

    return (
        <Container className="border my-5 bg-light">
            <div>
                <h1 className="text-center">My Toys</h1>
                {toys.map((toy) => (
                    <div key={toy._id}>
                        {editingToy === toy ? (
                            <div>
                                <h3>{toy.name}</h3>
                                <p>
                                    <label>
                                        Price:
                                        <input
                                            type="text"
                                            value={updatedPrice}
                                            onChange={(e) => setUpdatedPrice(e.target.value)}
                                        />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Quantity:
                                        <input
                                            type="text"
                                            value={updatedQuantity}
                                            onChange={(e) => setUpdatedQuantity(e.target.value)}
                                        />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Description:
                                        <textarea
                                            value={updatedDescription}
                                            onChange={(e) => setUpdatedDescription(e.target.value)}
                                        />
                                    </label>
                                </p>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => handleUpdate(toy._id)}
                                >
                                    Update
                                </button>
                            </div>
                        ) : (
                                <div>
                                    <Card className="mb-4">
                                        <Card.Body className="text-center">
                                            <Card.Title>{toy?.name}</Card.Title>
                                            <Card.Text>Seller: {toy?.sellerName}</Card.Text>
                                            <Card.Text>Seller: {toy?.sellerEmail}</Card.Text>
                                            <Card.Text>Seller: {toy?.subCategory}</Card.Text>
                                            <Card.Text>Price: ${toy?.price}</Card.Text>
                                            <Card.Text>Rating: {toy?.rating}</Card.Text>
                                            <Card.Text>Rating: {toy?.quantity}</Card.Text>
                                            <Card.Text>Description: {toy?.description}</Card.Text>
                                            <div className="mx-5 px-5 d-flex justify-content-between">
                                                <Button variant="secondary" onClick={() => handleUpdateToyData(toy)}>
                                                    Update Toys
                                                </Button>{" "}
                                                <Button variant="secondary" onClick={() => handleDelete(toy._id)}>
                                                    Delete
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>

                        )}
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default MyToys;
