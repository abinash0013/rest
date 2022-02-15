import React from "react";

const SinglePrices = (props) => {
    return (
        <div className="col-4">
            <div className="price">
                <div className="price__img">
                    <img src={props.image} />
                </div>
                <h1 className="price__heading">{props.title}</h1>
                <p className="price__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                </p>
                <p className="price_rs">{props.prices}</p>
            </div>
        </div>
    );
};

export default SinglePrices;
