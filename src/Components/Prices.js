import React from "react";
import SinglePrices from "./SinglePrices";
import pizza1 from "./../img/pizza1.png";
import pizza2 from "./../img/pizza2.png";
import pizza3 from "./../img/pizza3.png";
import pizza4 from "./../img/pizza4.png";
import pizza5 from "./../img/pizza5.png";
import pizza6 from "./../img/pizza6.png";

const Prices = () => {
    return (
        <div className="prices">
            <div className="container">
                <div className="prices-row">
                    <SinglePrices image={pizza1} title="1" prices="$ 50/-" />
                    <SinglePrices image={pizza2} title="2" prices="$ 50/-" />
                    <SinglePrices image={pizza3} title="3" prices="$ 50/-" />
                    <SinglePrices image={pizza4} title="4" prices="$ 50/-" />
                    <SinglePrices image={pizza5} title="5" prices="$ 50/-" />
                    <SinglePrices image={pizza6} title="6" prices="$ 50/-" />
                </div>
            </div>
        </div>
    );
};

export default Prices;
