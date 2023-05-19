import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialSharing = ({ shareUrl, title }) => {
    // Function to handle sharing on Facebook
    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(url, "_blank");
    };

    // Function to handle sharing on Twitter
    const shareOnTwitter = () => {
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`;
        window.open(url, "_blank");
    };

    // Function to handle sharing on Instagram
    const shareOnInstagram = () => {
        const url = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="text-center">
            <ButtonGroup className="my-5">
                <Button variant="primary" onClick={shareOnFacebook}>
                    Share on <FaFacebook></FaFacebook>
                </Button>
                <Button variant="info" onClick={shareOnTwitter}>
                    Share on <FaTwitter></FaTwitter>
                </Button>
                <Button variant="danger" onClick={shareOnInstagram}>
                    Share on <FaInstagram></FaInstagram>
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default SocialSharing;
