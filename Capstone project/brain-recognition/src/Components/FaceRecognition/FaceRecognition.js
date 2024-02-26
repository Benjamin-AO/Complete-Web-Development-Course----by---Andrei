import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className="center">
            <div className="">
                <img alt="sample" src={imageUrl}></img>
            </div>
        </div>
    );
}

export default FaceRecognition;