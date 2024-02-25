import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'
import ParticlesBg from 'particles-bg'

const Logo = () => {
    return (
        <div className=" ma4 mt0" > 
            <Tilt className='logoWrapper br3 shadow-3'  >
                <ParticlesBg color='#864AF9' type="cobweb" num={5} bg={true} />
                <div className='Tilt' >
                    <img alt='logo' src={brain} ></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;