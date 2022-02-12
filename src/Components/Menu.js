import React from "react";

const Menu = () => {
    return (
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="menu__img">
                            <img src="/img/pizza.jpg" />
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>CHICACO THIN CRUST</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            consequuntur voluptatum molestiae quas.
                        </p>
                        <div className="menu__btn">
                            <a href="#" className="btn btn-smart">
                                View More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
