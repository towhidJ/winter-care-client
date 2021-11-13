import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "./../Shared/Footer/Footer";
import Navigation from "./../Shared/Navigation/Navigation";

const Purchase = () => {
    const location = useLocation();
    const history = useHistory();
    const { id } = useParams();
    const { user } = useAuth();

    const { price, img, productName, description, category } = location.state;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.status = "Pending";
        data.price = price;
        data.productId = id;
        data.productName = productName;
        data.qty = 1;
        data.date = new Date().toLocaleDateString();
        fetch("https://radiant-castle-55741.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Order processed Successfully");
                    reset();
                    history.push("/dashboard/orders");
                }
            });
        console.log(data);
    };
    return (
        <>
            <Navigation></Navigation>
            <div className="container mt-5 pt-5 overflow-hidden">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-center">
                                <img src={img} className="img-fluid" alt="" />
                            </li>
                            <li className="list-group-item  lh-sm">
                                <div className="">
                                    <h6
                                        className=" text-center my-0"
                                        style={{ fontSize: "2rem" }}
                                    >
                                        {productName}
                                    </h6>
                                </div>
                                {/* <span className="text-muted">{productName}</span> */}
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Product Category</h6>
                                </div>
                                <span className="text-muted">{category}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="text-muted">
                                    {description.slice(0, 150)}
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center lh-sm">
                                <div>
                                    <h6 className="my-0">Quantity</h6>
                                </div>
                                <span className="">1</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total amount (BDT)</span>
                                <strong>${price}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form
                            className="needs-validation"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="row g-3">
                                <div className="col-12">
                                    <label
                                        htmlFor="customerName"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="form-control"
                                        defaultValue={user.displayName}
                                        readOnly
                                        {...register("customerName")}
                                    />
                                </div>

                                <div className="col-12">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email{" "}
                                    </label>
                                    <input
                                        className="form-control"
                                        defaultValue={user.email}
                                        readOnly
                                        {...register("email")}
                                    />
                                </div>

                                <div className="col-12">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Phone Number{" "}
                                    </label>
                                    <input
                                        className="form-control"
                                        defaultValue=""
                                        placeholder="+88018XXXXXXXX"
                                        {...register("phoneNumber")}
                                    />
                                </div>

                                <div className="col-12">
                                    <label
                                        htmlFor="address"
                                        className="form-label"
                                    >
                                        Address
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        placeholder="1234 Chittagong"
                                        {...register("address", {
                                            required: true,
                                        })}
                                    />
                                    <p className="text-danger mx-auto">
                                        {errors.address ? (
                                            <span>Address is required</span>
                                        ) : (
                                            ""
                                        )}
                                    </p>
                                </div>

                                <div className="col-md-6">
                                    <label
                                        htmlFor="country"
                                        className="form-label"
                                    >
                                        Country
                                    </label>
                                    <select
                                        className="form-select"
                                        {...register("country")}
                                    >
                                        <option value="">Choose...</option>
                                        <option value="bangladesh">
                                            Bangladesh
                                        </option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label
                                        htmlFor="state"
                                        className="form-label"
                                    >
                                        State
                                    </label>
                                    <select
                                        className="form-select"
                                        {...register("state", {
                                            required: true,
                                        })}
                                    >
                                        <option value="">Choose...</option>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="chittagong">
                                            Chittagong
                                        </option>
                                    </select>
                                    <p className="text-danger mx-auto">
                                        {errors.state ? (
                                            <span>State is required</span>
                                        ) : (
                                            ""
                                        )}
                                    </p>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <input
                                className="w-100 btn btn-warning mb-3 btn-lg"
                                type="submit"
                                value="Purchase"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Purchase;
