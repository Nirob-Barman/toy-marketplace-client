import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Gallery = () => {
    const images = [
        { src: 'https://img.freepik.com/free-vector/baby-boy-background-hand-drawn-style_23-2147767182.jpg?w=740&t=st=1684627788~exp=1684628388~hmac=e44e2ace86c44cfb5d515edc9d527726e8eca1e1887b014cbaba36f7aa205d7a', alt: 'Image 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { src: 'https://img.freepik.com/premium-vector/vector-illustration-little-boy-driving-toy-car_491934-868.jpg?w=740', alt: 'Image 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { src: 'https://img.freepik.com/free-vector/cute-baby-shower-design_23-2147945708.jpg?w=740&t=st=1684627746~exp=1684628346~hmac=6465c593594c7946b53e9b0d5789faaab044cf5495a665f236016482b56103f1', alt: 'Image 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { src: 'https://img.freepik.com/free-vector/happy-baby-concept-illustration_114360-8418.jpg?w=740&t=st=1684627751~exp=1684628351~hmac=2d763d985df45b3cfb636f6ea68c3905e34bece987b0ecfe6c7db507d74752df', alt: 'Image 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        
        // Add more images here
    ];

    return (
        <div className="py-5">

            <Container>
                <h2 className="text-center mb-4">Gallery</h2>
                <Row>
                    {images.map((image, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                            <Card>
                                <Card.Img
                                    src={image.src}
                                    alt={image.alt}
                                    className="img-fluid gallery-image"
                                    style={{ width: "200px", height: "200px" }}
                                />
                                <Card.Body>
                                    <Card.Title className='text-center'>{image.alt}</Card.Title>
                                    {/* <Card.Text>{image.description}</Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            
        </div>
    );
};

export default Gallery;



// import React from 'react';
// import { Carousel } from 'react-bootstrap';


// const Gallery = () => {

    
//     const images = [
//         'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740',
//         'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740',
//         'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740',
//         // Add more image URLs as needed
//     ];

//     return (
//         <Carousel
//             indicators={false}
//             prevIcon={<span className="carousel-control-prev-icon" />}
//             nextIcon={<span className="carousel-control-next-icon" />}
//         >
//             {images.map((image, index) => (
//                 <Carousel.Item key={index}>
//                     <img src={image} alt={`Image ${index + 1}`} className="d-block w-100" />
//                 </Carousel.Item>
//             ))}
//         </Carousel>
//     );
// };

// export default Gallery;


// import React from 'react';
// import { Carousel, CarouselItem, Image } from 'react-bootstrap';

// const Gallery = () => {
//     const images = [
//         'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740',
//         'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740',
//         'https://img.freepik.com/premium-photo/toy-car-isolated_130040-1833.jpg?w=740',
//         // Add more image URLs as needed
//     ];

//     return (
//         <Carousel style={{ height: '400px' }}>
//             {images.map((image, index) => (
//                 <CarouselItem key={index}>
//                     <Image src={image} alt={`Image ${index + 1}`} fluid />
//                 </CarouselItem>
//             ))}
//         </Carousel>
//     );
// };

// export default Gallery;

