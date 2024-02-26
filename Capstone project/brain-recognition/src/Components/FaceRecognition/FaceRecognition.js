import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="center">
            <div className="absolute mt2">
                <img id='inputImage' alt="sample" src={imageUrl}/>
                <div className="bounding-box" style={{top: box.topRow_, right: box.rightCol_, bottom: box.bottomRow_, left: box.leftCol_ }}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;