import React from 'react';
import { Container } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blog');
    return (
        <Container className='my-5'>
            <div>
                <h3>What is an access token and refresh token?</h3>
                <p>
                    Access Token:
                    An access token is a credential used to authenticate and authorize a user's access to protected resources.
                    It is typically issued by an authentication server upon successful login and is used to verify the user's identity in subsequent requests.
                    Access tokens are usually short-lived and are stored on the client-side, commonly in browser cookies or local storage.
                </p>
                <p>
                    Refresh Token:
                    A refresh token is a long-lived credential used to obtain a new access token when the current one expires.
                    It is securely stored on the client-side and is used to request a new access token from the authentication server.
                    Refresh tokens have a longer lifespan than access tokens and should be stored in a secure manner, such as in an HTTP-only cookie.
                </p>
            </div>
            <div>
                <h3>Compare SQL and NoSQL databases</h3>
                <p>
                    SQL Databases:
                    SQL (Structured Query Language) databases are based on a relational model, using tables to store data.
                    They have a predefined schema and enforce strict data integrity through constraints and relationships.
                    SQL databases are suitable for complex and structured data, supporting ACID (Atomicity, Consistency, Isolation, Durability) properties.
                </p>
                <p>
                    NoSQL Databases:
                    NoSQL (Not only SQL) databases are non-relational and provide flexible schema designs.
                    They can handle large volumes of unstructured and semi-structured data, making them highly scalable.
                    NoSQL databases offer high availability, horizontal scaling, and better performance for certain use cases like big data and real-time applications.
                </p>
            </div>
            <div>
                <h3>What is Express.js and Nest.js?</h3>
                <p>
                    Express.js:
                    Express.js is a minimalist and flexible web application framework for Node.js.
                    It provides a robust set of features to build web and mobile applications, APIs, and server-side applications.
                    Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and template rendering.
                </p>
                <p>
                    Nest.js:
                    Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications.
                    It combines elements of object-oriented programming, functional programming, and functional reactive programming.
                    Nest.js leverages TypeScript and decorators to create modular and extensible applications, following best practices and architectural patterns.
                </p>
            </div>
            <div>
                <h3>What is MongoDB aggregate and how does it work?</h3>
                <p>
                    MongoDB Aggregate:
                    MongoDB's aggregation framework is a powerful tool for processing and analyzing data within the database.
                    It allows you to perform advanced data manipulations, transformations, and aggregations, similar to SQL's GROUP BY or JOIN operations.
                    The aggregation pipeline in MongoDB consists of multiple stages, such as matching, grouping, projecting, sorting, and more.
                    Each stage applies specific operations to the documents and passes the results to the next stage, creating a pipeline of transformations.
                </p>
            </div>
        </Container>
    );
};

export default Blogs;

