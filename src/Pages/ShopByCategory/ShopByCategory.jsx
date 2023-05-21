//



// import React, { useState, useEffect } from 'react';
// import { Tab, Tabs } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const ShopByCategory = () => {
//     const [toyData, setToyData] = useState([]);
//     const [currentTab, setCurrentTab] = useState(0);

//     useEffect(() => {
//         // Simulating data fetching from an API or database
//         const fetchToyData = async () => {
//             // Replace this with your actual data fetching logic
//             const response = await fetch('https://toy-marketplace-server-bay.vercel.app/toys');
//             const data = await response.json();
//             setToyData(data);
//         };

//         fetchToyData();
//     }, []);

//     const handleTabSelect = (index) => {
//         setCurrentTab(index);
//     };

//     const groupToysByCategory = (toys) => {
//         const categories = {};

//         toys.forEach((toy) => {
//             const { category, subCategory } = toy;

//             if (!categories[category]) {
//                 categories[category] = {};
//             }

//             if (!categories[category][subCategory]) {
//                 categories[category][subCategory] = [];
//             }

//             categories[category][subCategory].push(toy);
//         });

//         return categories;
//     };

//     const groupedToys = groupToysByCategory(toyData);

//     return (
//         <div>
//             <h2>Shop by Category</h2>
//             <Tabs selectedIndex={currentTab} onSelect={handleTabSelect}>
//                 {Object.keys(groupedToys).map((category) => (
//                     <Tab key={category} label={category}>
//                         {Object.keys(groupedToys[category]).map((subCategory) => (
//                             <div key={subCategory}>
//                                 <h3>{subCategory}</h3>
//                                 {groupedToys[category][subCategory].map((toy) => (
//                                     <div key={toy.id}>
//                                         <img src={toy.picture} alt={toy.name} />
//                                         <p>Name: {toy.name}</p>
//                                         <p>Price: {toy.price}</p>
//                                         <p>Rating: {toy.rating}</p>
//                                         <button>View Details</button>
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                     </Tab>
//                 ))}
//             </Tabs>
//         </div>
//     );
// };

// export default ShopByCategory;




// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import ToysCard from "./ToysCard";
// import './ShopByCategory';
// import { Container, Spinner } from "react-bootstrap";

// const ShopByCategory = () => {
//     const [toys, setToys] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetchToys();
//     }, []);

//     const fetchToys = async () => {
//         try {
//             const response = await fetch("https://toy-marketplace-server-bay.vercel.app/toys");
//             if (response.ok) {
//                 const data = await response.json();
//                 setToys(data);
//             } else {
//                 throw new Error("Failed to fetch toys");
//             }
//         } catch (error) {
//             console.error("Failed to fetch toys:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     console.log(toys);

//     const filterToysBySubcategory = (subcategory) => {
//         return toys.filter((toy) => toy.subCategory === subcategory);
//     };
//     return (
//         <div className="tabs">
//             <Container>
//                 <div className="text-center">
//                     Select each category to show different toys
//                 </div>
//             </Container>
//             <Tabs >
//                 <TabList>
//                     <Tab className="tab">sports car</Tab>
//                     <Tab className="tab">regular car</Tab>
//                     <Tab className="tab">mini police car</Tab>
//                 </TabList>

//                 <TabPanel>
//                     <h2>sports car</h2>
//                     {isLoading ? (
//                         <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//                             <Spinner animation="border" role="status" variant="primary">
//                                 <span className="sr-only">Loading...</span>
//                             </Spinner>
//                         </Container>
//                     ) : (
//                         filterToysBySubcategory("sports")
//                             .slice(0, 2)
//                             .map((toy) => (
//                                 // console.log(toy.name)
//                                 <ToysCard key={toy._id} toy={toy}></ToysCard>
//                             ))
//                     )}
//                 </TabPanel>

//                 <TabPanel >
//                     <h2>regular car</h2>
//                     {isLoading ? (
//                         <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//                             <Spinner animation="border" role="status" variant="primary">
//                                 <span className="sr-only">Loading...</span>
//                             </Spinner>
//                         </Container>
//                     ) : (
//                         filterToysBySubcategory("regular").slice(0, 2).map((toy) => (
//                             <ToysCard key={toy._id} toy={toy}></ToysCard>
//                         ))
//                     )}
//                 </TabPanel>

//                 <TabPanel>
//                     <h2>mini police car</h2>
//                     {isLoading ? (
//                         <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//                             <Spinner animation="border" role="status" variant="primary">
//                                 <span className="sr-only">Loading...</span>
//                             </Spinner>
//                         </Container>
//                     ) : (
//                         filterToysBySubcategory("police").slice(0, 2).map((toy) => (
//                             <ToysCard key={toy._id} toy={toy}></ToysCard>
//                         ))
//                     )}
//                 </TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default ShopByCategory;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ToysCard from "./ToysCard";
import { Container, Spinner, Row, Col } from "react-bootstrap";

const ShopByCategory = () => {
    const [toys, setToys] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = async () => {
        try {
            const response = await fetch("https://toy-marketplace-server-bay.vercel.app/toys");
            if (response.ok) {
                const data = await response.json();
                setToys(data);
            } else {
                throw new Error("Failed to fetch toys");
            }
        } catch (error) {
            console.error("Failed to fetch toys:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const filterToysBySubcategory = (subcategory) => {
        return toys.filter((toy) => toy.subCategory === subcategory);
    };

    return (
        <div className="tabs">
            <Container>
                <div className="text-center">
                    Select each category to show different toys
                </div>
            </Container>
            <Tabs>
                <TabList>
                    <Tab className="tab">Sports Car</Tab>
                    <Tab className="tab">Regular Car</Tab>
                    <Tab className="tab">Mini Police Car</Tab>
                </TabList>

                <TabPanel>
                    <h2>Sports Car</h2>
                    {isLoading ? (
                        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Container>
                    ) : (
                        <Row xs={1} md={2} lg={3}>
                            {filterToysBySubcategory("sports")
                                .slice(0, 2)
                                .map((toy) => (
                                    <Col key={toy._id}>
                                        <ToysCard toy={toy}></ToysCard>
                                    </Col>
                                ))}
                        </Row>
                    )}
                </TabPanel>

                <TabPanel>
                    <h2>Regular Car</h2>
                    {isLoading ? (
                        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Container>
                    ) : (
                        <Row xs={1} md={2} lg={3}>
                            {filterToysBySubcategory("regular")
                                .slice(0, 2)
                                .map((toy) => (
                                    <Col key={toy._id}>
                                        <ToysCard toy={toy}></ToysCard>
                                    </Col>
                                ))}
                        </Row>
                    )}
                </TabPanel>

                <TabPanel>
                    <h2>Mini Police Car</h2>
                    {isLoading ? (
                        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                            <Spinner animation="border" role="status" variant="primary">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </Container>
                    ) : (
                        <Row xs={1} md={2} lg={3}>
                            {filterToysBySubcategory("police")
                                .slice(0, 2)
                                .map((toy) => (
                                    <Col key={toy._id}>
                                        <ToysCard toy={toy}></ToysCard>
                                    </Col>
                                ))}
                        </Row>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
