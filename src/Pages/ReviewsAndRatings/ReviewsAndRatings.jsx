import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const ReviewsAndRatings = () => {
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    // Function to handle rating selection
    const handleRatingSelection = (selectedRating) => {
        setRating(selectedRating);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            rating,
            comment,
        };
        setReviews([...reviews, newReview]);
        setRating(0);
        setComment("");
    };

    return (
        <Container>
            <div className="text-center mb-4">
                <h2>Reviews and Ratings</h2>
            </div>
            {reviews.length === 0 ? (
                <p className="text-center">No reviews yet. Be the first to write a review!</p>
            ) : (
                reviews.map((review, index) => (
                    <Card key={index} className="mb-3">
                        <Card.Body>
                            <Card.Title>Rating: {review.rating}</Card.Title>
                            <Card.Text>{review.comment}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            )}
            <div className="text-center">
                <h4>Write a Review</h4>
                <Form onSubmit={handleSubmit} className="row g-3">
                    <Form.Group controlId="rating" className="col-md-6">
                        <Form.Label>Rating:</Form.Label>
                        <div>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <label key={star} className="d-inline-block">
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={star}
                                        onClick={() => handleRatingSelection(star)}
                                    />
                                    <FaStar
                                        className="star-icon"
                                        color={star <= rating ? "gold" : "gray"}
                                        size={24}
                                    />
                                </label>
                            ))}
                        </div>
                    </Form.Group>
                    <Form.Group controlId="comment" className="col-md-6">
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>

    );
};

export default ReviewsAndRatings;
