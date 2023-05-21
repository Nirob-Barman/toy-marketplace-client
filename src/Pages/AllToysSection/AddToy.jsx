import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {

    useTitle('AddToy');

    const { user } = useContext(AuthContext);
    console.log(user);

    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState('');
    // const [sellerName, setSellerName] = useState(''); // Assume you have the seller name from the logged-in user
    // const [sellerEmail, setSellerEmail] = useState(''); // Assume you have the seller email from the logged-in user
    const [subCategory, setSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event target', event.target);
        // console.log(user.displayName, user.email);
        // Create a new toy object with the form values
        const newToy = {
            pictureUrl,
            name,
            sellerName: user.displayName,
            sellerEmail: user.email,
            subCategory,
            price,
            rating,
            quantity,
            description,
        };
        console.log('New Toy', newToy);
        fetch('https://toy-marketplace-server-bay.vercel.app/addToys',
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
        // setSellerName('');
        // setSellerEmail('');
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
                        <Form.Label>Toy Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="sellerName">
                        <Form.Label>Seller Name:</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            value={user.displayName}
                        // onChange={(e) => setSellerName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="sellerEmail">
                        <Form.Label>Seller Email:</Form.Label>
                        <Form.Control
                            disabled
                            type="email"
                            // value={sellerEmail}
                            defaultValue={user.email}
                        // onChange={(e) => setSellerEmail(e.target.value)}
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




// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Container } from "react-bootstrap";

// const AddToy = () => {
//     const { user } = useContext(AuthContext)

//     const { register, handleSubmit, watch, formState: { errors } } = useForm();

//     const onSubmit = data => {
//         console.log(data);
//         fetch(`https://toy-marketplace-server-bay.vercel.app/addToys`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 console.log(result);
//                 if (result.insertedId) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Toy Added Successful',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                 }
//             })

//     };
//     return (
//         <Container>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex w-full">
//                     <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
//                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                             <div className=" flex gap-5">
//                                 {/* left side  */}
//                                 <div className="w-1/2">

//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Seller Name</span>
//                                         </label>
//                                         <input type="text" {...register("seller_name")} placeholder="Seller Name" value={user?.displayName} className="input input-bordered" />
//                                     </div>

//                                     {/* 1  */}
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Seller Email</span>
//                                         </label>
//                                         <input {...register("seller_email")} type="email" placeholder="Email" value={user?.email} className="input input-bordered" />

//                                     </div>

//                                     {/* 2 */}
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Category</span>
//                                         </label>
//                                         <input {...register("category")} type="text" placeholder="Action Figures" defaultValue="Action Figures" className="input input-bordered" />

//                                     </div>

//                                     {/* 3  */}
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Sub Category</span>
//                                         </label>
//                                         <select  {...register("sub_category", { required: true })} className="select select-bordered w-full">
//                                             <option value="Marvel">Marvel</option>
//                                             <option value="DC Comics">DC Comics</option>
//                                             <option value="Star Wars">Star Wars</option>
//                                             <option value="Transformers">Transformers</option>
//                                         </select>

//                                     </div>

//                                     {/* 4  */}
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Toy Name</span>
//                                         </label>
//                                         <input  {...register("toy_name", { required: true })} type="text" placeholder="Toy Name" className="input input-bordered" />

//                                     </div>
//                                     {/* 5  */}
//                                 </div>
//                                 {/* left side */}
//                                 {/* right site  */}
//                                 <div className="w-1/2">


//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Toy Image</span>
//                                         </label>
//                                         <input {...register("toy_image", { required: true })} type="text" placeholder="url" className="input input-bordered" />

//                                     </div>

//                                     {/* 6  */}

//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Price</span>
//                                         </label>
//                                         <input  {...register("price", { min: 0, required: true })} type="text" placeholder="0" className="input input-bordered" />

//                                     </div>


//                                     {/* 7  */}

//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Available Quantity</span>
//                                         </label>
//                                         <input  {...register("available_quantity", { min: 1, required: true })} type="number" placeholder="0" className="input input-bordered" />

//                                     </div>

//                                     {/* 8  */}
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Rating</span>
//                                         </label>
//                                         <input  {...register("rating", { min: 0, max: 5, required: true })} type="number" placeholder="0" className="input input-bordered" />

//                                     </div>
//                                     {/* 9  */}

//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Description</span>
//                                         </label>
//                                         <input  {...register("description", { required: true })} type="text" placeholder="Description" className="input input-bordered" />

//                                     </div>


//                                 </div>
//                                 {/* right site  */}
//                             </div>
//                             {errors.exampleRequired && <span>This field is required</span>}
//                             <div className="form-control mt-6">
//                                 <input type="submit" className="btn btn-primary" />
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </Container>
//     );
// };

// export default AddToy;