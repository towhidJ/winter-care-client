import React from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import ProductAd from "../ProductAd/ProductAd";
import Product from "./../../Shop/Product/Product";
import Info from "./../Info/Info";
import "./Home.css";
const Home = () => {
    return (
        <div>
            <Banner />
            <ProductAd />
            <div className="text-center">
                <h1 className="search-text">
                    Our
                    <span className="search-heading-text"> Products</span>
                </h1>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 g-3 my-3 mx-auto container">
                <Product />
                <Product />
                <Product />
            </div>
            <Info />
            <CustomerReviews />
            <div className="my-3 px-2">
                <Blog />
            </div>
        </div>
    );
};

export default Home;
