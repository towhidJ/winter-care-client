import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../images/banner-1.jpg";
import banner3 from "../../../images/Slider-1.png";
import banner2 from "../../../images/Slider-2.png";
import "./Banner.css";
const Banner = () => {
    return (
        <section className=" mt-5 pt-3 bannerHome">
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
                            src={banner3}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-md-block">
                            <p>100% Healthy & Affordable</p>
                            <h5>Skin Care</h5>

                            <Link to="/shop" className="btn btn-warning">
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img
                            src={banner1}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-md-block">
                            <p>100% Healthy & Affordable</p>
                            <h5>Organic Creme</h5>

                            <Link to="/shop" className="btn btn-warning">
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src={banner2}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-s  d-md-block">
                            <p>100% Natural Product</p>
                            <h5>Face Care</h5>

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
