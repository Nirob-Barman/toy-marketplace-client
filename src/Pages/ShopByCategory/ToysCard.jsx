import { Link } from "react-router-dom";

const ToysCard = ({ toy }) => {
    console.log(toy);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img className="d-block mx-auto" src={toy.pictureUrl} alt={toy.name} style={{ height: "200px", width: "200px" }} />

            </figure>
            <div className="card-body w-full">
                <h2>Seller : {toy.sellerName}</h2>
                <p>Toy Name : {toy.name}</p>
                <p>Category : {toy.subCategory}</p>
                <p>Price : {toy.price}</p>
                <p>Available : {toy.quantity}</p>
                <Link to={`/singleToys/${toy._id}`}>
                    <button className="btn btn-secondary text-white"> View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ToysCard;
