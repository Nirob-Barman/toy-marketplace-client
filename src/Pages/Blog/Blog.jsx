// import React from 'react';
// import { Container } from 'react-bootstrap';
// import useTitle from '../../hooks/useTitle';

// const Blogs = () => {
//     useTitle('Blog');
//     return (
//         <Container>
//             <div>
//                 <h3>What is an access token and refresh token?</h3>
//                 <p>
//                     An access token is a credential that is used to authenticate and authorize a user to access protected resources in an application. It is usually a JWT (JSON Web Token) containing information about the user and their permissions. Access tokens are typically short-lived and are sent with each request to the server to authenticate the user.
//                 </p>
//                 <p>
//                     A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is securely stored on the client-side and sent to the server to request a new access token. Refresh tokens are used to provide a better user experience by avoiding frequent login prompts while still maintaining security.
//                 </p>
//                 <p>
//                     Access tokens should be stored in a secure manner on the client-side. One common approach is to store them in an HTTP-only cookie, which provides protection against cross-site scripting (XSS) attacks. Refresh tokens should also be securely stored, preferably in an HTTP-only cookie or in a secure storage mechanism such as browser's localStorage or sessionStorage.
//                 </p>
//             </div>
//             <div>
//                 <h3>Compare SQL and NoSQL databases</h3>
//                 <p>
//                     SQL databases, also known as relational databases, use a structured approach to store data. They have predefined schemas, and data is organized into tables with rows and columns. SQL databases are suitable for applications that require strong consistency, complex relationships, and ACID (Atomicity, Consistency, Isolation, Durability) transactions.
//                 </p>
//                 <p>
//                     NoSQL databases, on the other hand, are non-relational databases that provide flexibility in storing and retrieving data. They don't enforce strict schemas and can handle unstructured and rapidly changing data. NoSQL databases are designed for scalability, high performance, and distributed computing. They are suitable for applications that deal with large amounts of data, require high throughput, and need horizontal scalability.
//                 </p>
//             </div>
//             <div>
//                 <h3>What is Express.js and Nest.js?</h3>
//                 <p>
//                     Express.js is a popular web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs. Express.js focuses on minimalist design, allowing developers to define routes, handle HTTP requests and responses, implement middleware, and integrate with various templating engines and databases.
//                 </p>
//                 <p>
//                     Nest.js is a progressive Node.js framework that builds upon Express.js. It leverages modern JavaScript features and TypeScript to provide a scalable and modular architecture for building server-side applications. Nest.js follows the architectural pattern of modules, controllers, and services, and uses decorators to define routes, request handlers, and dependency injection. It also provides out-of-the-box support for features like validation, authentication, and caching.
//                 </p>
//             </div>
//             <div>
//                 <h3>What is MongoDB aggregate and how does it work?</h3>
//                 <p>
//                     MongoDB's aggregate is a powerful feature that allows you to perform advanced data processing and analysis within the database. It provides a framework for running complex queries, transformations, and aggregations on data stored in MongoDB collections.
//                 </p>
//                 <p>
//                     The aggregation framework in MongoDB is a pipeline-based approach. It consists of multiple stages, each representing a step in the data processing pipeline. Each stage takes input documents, performs a specific operation, and passes the result to the next stage. The aggregation pipeline supports a wide range of operations such as filtering, grouping, sorting, projecting, joining, and more.
//                 </p>
//                 <p>
//                     By using the aggregation framework, you can perform calculations, generate reports, extract meaningful insights, and aggregate data from multiple collections. It offers powerful features like aggregation expressions, conditional operators, and the ability to work with arrays and nested documents.
//                 </p>
//             </div>
//         </Container>
//     );
// };

// export default Blogs;



import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog');

    return (
        <div>
            <h2>Exploring Important Concepts in Web Development</h2>

            <Accordion defaultActiveKey="0">
                {/* Access Token and Refresh Token */}
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>
                                Access Token:
                                An access token is a credential that is used to authenticate and authorize a user's access to protected resources in a system.
                                It typically contains information about the user and permissions granted.
                                Access tokens are usually short-lived and have an expiration time.
                                They are commonly used in stateless authentication mechanisms like JSON Web Tokens (JWT).
                                When a user makes a request to access a protected resource, the access token is included in the request to validate the user's identity and permissions.
                            </p>
                            <p>
                                Refresh Token:
                                A refresh token is a long-lived credential used to obtain a new access token when the current one expires.
                                It is usually issued alongside the access token and is securely stored on the client-side.
                                When the access token expires, the client can send the refresh token to the server to obtain a new access token without requiring the user to reauthenticate.
                                Refresh tokens have a longer lifespan compared to access tokens and are more securely stored.
                            </p>
                            <p>
                                Storing on the Client-side:
                                Access tokens and refresh tokens should be stored securely on the client-side to prevent unauthorized access.
                                Commonly, they are stored in secure HTTP-only cookies or local storage.
                                Storing them in HTTP-only cookies provides better protection against cross-site scripting (XSS) attacks.
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* SQL and NoSQL Databases */}
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Compare SQL and NoSQL databases.
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {/* Add your comparison of SQL and NoSQL databases here */}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Express.js and Nest.js */}
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        What is Express.js? What is Nest.js?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            {/* Add your explanation of Express.js and Nest.js here */}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* MongoDB Aggregate */}
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        What is MongoDB Aggregate and how does it work?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            {/* Add your explanation of MongoDB Aggregate here */}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default Blog;
