import React, { useState } from 'react';

const InteractiveTrackBuilder = () => {
    const [trackPieces, setTrackPieces] = useState([]);

    const handleAddTrackPiece = (trackPiece) => {
        setTrackPieces([...trackPieces, trackPiece]);
    };

    const handleRemoveTrackPiece = (index) => {
        const updatedTrackPieces = [...trackPieces];
        updatedTrackPieces.splice(index, 1);
        setTrackPieces(updatedTrackPieces);
    };

    return (
        <div className="interactive-track-builder">
            <h2>Interactive Track Builder</h2>
            <div className="track-pieces">
                {trackPieces.map((trackPiece, index) => (
                    <div className="track-piece" key={index}>
                        <p>{trackPiece}</p>
                        <button onClick={() => handleRemoveTrackPiece(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="add-track-piece">
                <input type="text" placeholder="Enter track piece" />
                <button onClick={() => handleAddTrackPiece('New Track Piece')}>Add Track Piece</button>
            </div>
        </div>
    );
};

export default InteractiveTrackBuilder;
