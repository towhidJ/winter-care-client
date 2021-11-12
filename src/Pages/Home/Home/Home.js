import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import ProductAd from "../ProductAd/ProductAd";
import useProducts from "./../../../hooks/useProducts";
import Footer from "./../../Shared/Footer/Footer";
import Navigation from "./../../Shared/Navigation/Navigation";
import Product from "./../../Shop/Product/Product";
import Banner from "./../Banner/Banner";
import Info from "./../Info/Info";
import "./Home.css";
const Home = () => {
    const { products, loading } = useProducts();
    const size = 6;
    const items = products.slice(0, size);
    return (
        <div>
            <Navigation></Navigation>

            <Banner />
            <ProductAd />
            <div className="text-center">
                <h1 className="search-text">
                    Our
                    <span className="search-heading-text"> Products</span>
                </h1>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 g-3 my-3 mx-auto container">
                {loading ? (
                    <div className=" d-flex justify-content-center align-items-center">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    items.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))
                )}
            </div>
            <div className="text-center d-flex justify-content-center my-5 py-2">
                <Link to="/shop" className="btn btn-danger w-50">
                    Explore more
                </Link>
            </div>
            <Info />
            <CustomerReviews />
            <div className="my-3 px-2">
                <div className="text-center">
                    <h1 className="search-text">
                        Our
                        <span className="search-heading-text"> Blog</span>
                    </h1>
                </div>
                <Blog />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
