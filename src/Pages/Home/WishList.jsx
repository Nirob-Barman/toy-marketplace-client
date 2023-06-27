import React, { useState } from 'react';

const WishList = () => {
    const [wishListItems, setWishListItems] = useState([
        { id: 1, name: 'Toy Car 1', price: 10 },
        { id: 2, name: 'Toy Car 2', price: 15 },
        { id: 3, name: 'Toy Car 3', price: 20 },
        { id: 4, name: 'Toy Car 4', price: 25 },
    ]);

    const [savedItems, setSavedItems] = useState([]);

    const handleMoveToSavedItems = (item) => {
        const updatedWishListItems = wishListItems.filter((wishListItem) => wishListItem.id !== item.id);
        setWishListItems(updatedWishListItems);
        setSavedItems([...savedItems, item]);
    };

    const handleRemoveFromSavedItems = (item) => {
        const updatedSavedItems = savedItems.filter((savedItem) => savedItem.id !== item.id);
        setSavedItems(updatedSavedItems);
    };

    return (
        <div className="wish-list my-5">
            <div className="wish-list-container">
                <h2>Wish List</h2>
                <div className="card-grid">
                    {wishListItems.map((item) => (
                        <div className="card" key={item.id}>

                            {/* <div className="card-image">
                                <img src={item.image} alt={item.name} />
                            </div> */}

                            <div className="card-details">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <button className="save-button" onClick={() => handleMoveToSavedItems(item)}>
                                    Save for Later
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="saved-items-container my-5">
                <h2>Saved Items</h2>
                <div className="card-grid">
                    {savedItems.map((item) => (
                        <div className="card" key={item.id}>

                            {/* <div className="card-image">
                                <img src={item.image} alt={item.name} />
                            </div> */}

                            <div className="card-details">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <button className="remove-button" onClick={() => handleRemoveFromSavedItems(item)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WishList;



// import React, { useState, useEffect } from 'react';

// const WishList = () => {
//     const [wishListItems, setWishListItems] = useState([]);
//     const [savedItems, setSavedItems] = useState([]);

//     useEffect(() => {
//         fetch('https://toy-marketplace-server-bay.vercel.app/toys')
//             .then((response) => response.json())
//             .then((data) => {
//                 setWishListItems(data);
//             })
//             .catch((error) => {
//                 console.log('Error fetching toy data:', error);
//             });
//     }, [wishListItems]);

//     const handleMoveToSavedItems = (item) => {
//         const updatedWishListItems = wishListItems.filter((wishListItem) => wishListItem.id !== item.id);
//         setWishListItems(updatedWishListItems);
//         setSavedItems([...savedItems, item]);
//     };

//     const handleRemoveFromSavedItems = (item) => {
//         const updatedSavedItems = savedItems.filter((savedItem) => savedItem.id !== item.id);
//         setSavedItems(updatedSavedItems);
//     };

//     return (
//         <div className="wish-list">
//             <div className="wish-list-container">
//                 <h2>Wish List</h2>
//                 <ul className="wish-list-items">
//                     {wishListItems.map((item) => (
//                         <li className="wish-list-item" key={item.id}>
//                             <div className="item-details">
//                                 <h3>{item.name}</h3>
//                                 <p>Price: ${item.price}</p>
//                             </div>
//                             <button className="save-button" onClick={() => handleMoveToSavedItems(item)}>
//                                 Save for Later
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="saved-items-container">
//                 <h2>Saved Items</h2>
//                 <ul className="saved-items">
//                     {savedItems.map((item) => (
//                         <li className="saved-item" key={item.id}>
//                             <div className="item-details">
//                                 <h3>{item.name}</h3>
//                                 <p>Price: ${item.price}</p>
//                             </div>
//                             <button className="remove-button" onClick={() => handleRemoveFromSavedItems(item)}>
//                                 Remove
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default WishList;
