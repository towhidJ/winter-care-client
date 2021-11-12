import React from "react";
import { Spinner } from "react-bootstrap";
import useProducts from "../../../hooks/useProducts";
import Footer from "../../Shared/Footer/Footer";
import Product from "../Product/Product";
import Navigation from "./../../Shared/Navigation/Navigation";

const Products = () => {
    const { products, loading } = useProducts();
    return (
        <>
            <Navigation />
            <div className="container mx-auto mt-5 pt-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {loading ? (
                        <div className=" d-flex justify-content-center align-items-center">
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        products.map((product) => (
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;
