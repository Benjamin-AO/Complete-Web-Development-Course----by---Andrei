import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center">
            <img alt="sample" src={imageUrl}/>
        </div>
    );
}

export default FaceRecognition;