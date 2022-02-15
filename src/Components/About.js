import React from "react";
import aboutRightImage from "./../img/pizza.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="px-25 pb-25">
                            <h3>About Us</h3>
                            <h1>Welcome to Meastro Pizzini</h1>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint consequuntur voluptatum molestiae
                                quas.
                            </p>
                            <div className="about__btn">
                                <a href="#" className="btn btn-smart">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src={aboutRightImage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
