import React from "react";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About Us</h3>
                        <h1>Welcome to Meastro Pizzini</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            consequuntur voluptatum molestiae quas.
                        </p>
                        <div className="about__btn">
                            <a href="#" className="btn btn-smart">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src="/img/pizza.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;