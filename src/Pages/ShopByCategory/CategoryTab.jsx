import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';
import { Col, Row } from 'react-bootstrap';

const CategoryTab = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-bay.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data);
            })
    }, [])

    const sports = toys.filter(toy => toy.subCategory === 'sports');
    const regular = toys.filter(toy => toy.subCategory === 'regular');
    const police = toys.filter(toy => toy.subCategory === 'police');

    // console.log(toys.length);
    // console.log(sports.length);;
    // console.log(regular.length);;
    // console.log(police.length);;

    return (
        <div className='my-1'>
            <Tabs>
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Mini Police Car</Tab>
                </TabList>

                <TabPanel>
                    <Row xs={1} md={2} lg={3}>
                        {
                            sports.slice(0, 2).map(toy =>
                                <Col
                                    key={toy._id}>
                                    <ToysCard toy={toy}></ToysCard>
                                </Col>
                            )
                        }
                    </Row>

                </TabPanel>
                <TabPanel>
                    <Row xs={1} md={2} lg={3}>
                        {
                            regular.slice(0, 2).map(toy =>
                                <Col
                                    key={toy._id}>
                                    <ToysCard toy={toy}></ToysCard>
                                </Col>
                            )
                        }
                    </Row>
                </TabPanel>
                <TabPanel>
                    <Row xs={1} md={2} lg={3}>
                        {
                            police.slice(0, 2).map(toy =>
                                <Col
                                    key={toy._id}>
                                    <ToysCard toy={toy}></ToysCard>
                                </Col>
                            )
                        }
                    </Row>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;