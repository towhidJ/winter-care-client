import React from "react";
import banner2 from "../../../images/banner-2.jpg";
import banner1 from "../../../images/banner-3.jpg";
import "./Banner.css";
const Banner = () => {
    return (
        <section className=" mt-5 bannerHome">
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={banner1}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-md-block">
                            <p>100% Healthy & Affordable</p>
                            <h5>Organic Creme</h5>

                            <button className="btn btn-warning">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={banner2}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption  d-md-block">
                            <p>100% Natural Product</p>
                            <h5>Quality of life</h5>

                            <button className="btn btn-warning">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Banner;
