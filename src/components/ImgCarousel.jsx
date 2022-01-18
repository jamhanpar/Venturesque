import React from 'react'

// imgs
import amusementPark from "../assets/img/amusement-park.svg";
import artMuseum from "../assets/img/art-museum.svg";
import camping from "../assets/img/camping.svg";
import eatingTogether from "../assets/img/eating-together.svg";
import throughThePark from "../assets/img/through-the-park.svg";

const ImgCarousel = () => {
    return (
        <div className="images-container">
            <img className="img-item-camping" src={camping} alt="Camping" />
            <img className="img-item-walking" src={throughThePark} alt="Walking In The Park" />
            <img className="img-item-art" src={artMuseum} alt="Art" />
            <img className="img-item-dining" src={eatingTogether} alt="Dining" />
            <img className="img-item-park" src={amusementPark} alt="Amusement Park" />
        </div>
    )
}

export default ImgCarousel;
