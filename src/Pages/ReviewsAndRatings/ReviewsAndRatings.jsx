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
            <h2 className="text-center mb-4">Reviews and Ratings</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet. Be the first to write a review!</p>
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
            <h4>Write a Review</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="rating">
                    <Form.Label>Rating:</Form.Label>
                    <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <label key={star}>
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
                <Form.Group controlId="comment">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default ReviewsAndRatings;
