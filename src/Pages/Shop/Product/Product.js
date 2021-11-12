import Rating from "@mui/material/Rating";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = (props) => {
    const {
        _id,
        productName,
        description,
        starCount,
        category,
        price,
        subtitle,
        img,
        brandName,
    } = props.product;
    return (
        <div className="col hp">
            <div className="card  shadow-sm">
                <a href="#">
                    <img
                        src={img}
                        className="card-img-top"
                        alt="product.title"
                    />
                </a>

                <div className="label-top shadow-sm">
                    <span className="text-white">{brandName}</span>
                </div>
                <div className="card-body">
                    <div className="clearfix mb-3">
                        <span className="float-start badge rounded-pill bg-success">
                            {price}$
                        </span>

                        <span className="float-end">
                            <p className="small text-muted text-uppercase aff-link">
                                <Rating
                                    name="read-only"
                                    value={starCount}
                                    readOnly
                                />
                            </p>
                        </span>
                    </div>
                    <h4 className="card-title">
                        <p>{productName}</p>
                    </h4>
                    <hp className="card-title">
                        <p>{subtitle}</p>
                    </hp>
                    <h5 className="card-title">
                        <p>{description.slice(0, 150)}</p>
                    </h5>

                    <div className="d-grid  gap-2 my-4">
                        <Link
                            to={{
                                pathname: `/s/${_id}`,
                                state: {
                                    price,
                                    id: _id,
                                    img: img,
                                    description,
                                    category,
                                    productName,
                                    subtitle,
                                },
                            }}
                            className="btn btn-danger bold-btn"
                        >
                            Details
                        </Link>
                        <Link
                            to={{
                                pathname: `/purchase/${_id}`,
                                state: {
                                    price,
                                    id: _id,
                                    img: img,
                                    description,
                                    category,
                                    productName,
                                },
                            }}
                            className="btn btn-warning bold-btn"
                        >
                            Buy Now
                        </Link>
                    </div>
                    <div className="clearfix mb-1">
                        <span className="float-start">
                            <p>
                                <i className="fas fa-question-circle"></i>
                            </p>
                        </span>

                        <span className="float-end">
                            <i
                                className="far fa-heart"
                                style={{ cursor: "pointer" }}
                            ></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
