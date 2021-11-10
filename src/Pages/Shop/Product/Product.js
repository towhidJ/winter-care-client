import React from "react";
import "./Product.css";
const Product = () => {
    return (
        <div>
            <div className="vh-250 d-flex justify-content-center align-items-center product">
                <div className="container mx-auto d-flex justify-content-center">
                    <div
                        className="card"
                        style={{ backgroundColor: "aliceblue" }}
                    >
                        <div className="p-info px-3 py-3">
                            <div>
                                <h5 className="mb-0">Beats By Dre</h5>{" "}
                                <span>Professional Headphones</span>
                            </div>
                            <div className="p-price d-flex flex-row">
                                {" "}
                                <span>$</span>
                                <h2>299</h2>
                            </div>
                            <div className="heart">
                                {" "}
                                <i className="bx bx-heart"></i>{" "}
                            </div>
                        </div>
                        <div className="text-center p-image">
                            {" "}
                            <img src="https://i.imgur.com/hpftqCo.png" />{" "}
                        </div>
                        <div className="p-about">
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed
                            </p>
                        </div>
                        <div className="buttons d-flex flex-row gap-3 px-3">
                            {" "}
                            <button className="btn btn-danger w-100">
                                View
                            </button>{" "}
                            <button className="btn btn-outline-danger w-100">
                                Buy Now
                            </button>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
