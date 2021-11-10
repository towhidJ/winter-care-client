import React from "react";
import "./Team.css";
const Team = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="search-text">
                    Our
                    <span className="search-heading-text"> Teams</span>
                </h1>
            </div>

            <div className="row row-cols-lg-3 row-cols-1 justify-content-center">
                <div className="col mb-4 ">
                    <div className="card border-0 ">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {" "}
                                    <img
                                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                                        className="card-img-top"
                                        alt="avatar"
                                    />
                                    <div className="card-body text-center ">
                                        <h5 className="card-title mb-0">
                                            Towhidul Islam
                                        </h5>
                                        <div className="card-text text-black-50">
                                            CEO
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="person text- ">
                                        Towhidul Islam
                                    </h1>
                                    <p className="description text-black-50">
                                        CEO OF Winter Care Shop
                                    </p>{" "}
                                    <a href="#" className="fas fa-facebook"></a>{" "}
                                    <a href="#" className="fas fa-twitter"></a>{" "}
                                    <a href="#" className="fas fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col mb-4 ">
                    <div className="card border-0 " style={{ width: "350px" }}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    {" "}
                                    <img
                                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                                        className="card-img-top"
                                        alt="avatar"
                                    />
                                    <div className="card-body text-center ">
                                        <h5 className="card-title mb-0">
                                            Fahad Aziz
                                        </h5>
                                        <div className="card-text text-black-50">
                                            Manager
                                        </div>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h1 className="person text- ">
                                        Fahad Aziz
                                    </h1>
                                    <p className="description text-black-50">
                                        Manager of Winter Care Shop
                                    </p>{" "}
                                    <a href="#" className="fas fa-facebook"></a>{" "}
                                    <a href="#" className="fas fa-twitter"></a>{" "}
                                    <a href="#" className="fas fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
