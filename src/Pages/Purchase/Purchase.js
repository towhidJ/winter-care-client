import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const Purchase = () => {
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is Requied"),
        address: Yup.string().required("Please enter your shipping address."),
        country: Yup.string().required("Please select a valid country."),
        state: Yup.string().required("Please provide a valid state."),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm(formOptions);
    const onSubmit = (data) => {
        data.price = "123";
        console.log(data);
    };
    return (
        <div className="container mt-5 pt-5 overflow-hidden">
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                <h6 className="my-0">Product name</h6>
                            </div>
                            <span className="text-muted">$12</span>
                        </li>

                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total amount (BDT)</span>
                            <strong>$20</strong>
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
                                    htmlFor="fullName"
                                    className="form-label"
                                >
                                    First name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    {...register("fullName", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />

                                <p className="text-danger">
                                    {errors.fullName?.message}
                                </p>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">
                                    Email{" "}
                                    <span className="text-muted">
                                        (Optional)
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="you@example.com"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                <p className="text-danger mx-auto">
                                    {errors.email?.message}
                                </p>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">
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
                                    {errors.address?.message}
                                </p>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="country" className="form-label">
                                    Country
                                </label>
                                <select
                                    className="form-select"
                                    {...register("country", {
                                        required: true,
                                    })}
                                >
                                    <option value="">Choose...</option>
                                    <option value="bangladesh">
                                        Bangladesh
                                    </option>
                                </select>
                                <p className="text-danger mx-auto">
                                    {errors.country?.message}
                                </p>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="state" className="form-label">
                                    State
                                </label>
                                <select
                                    className="form-select"
                                    {...register("state", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                >
                                    <option value="">Choose...</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chittagong">
                                        Chittagong
                                    </option>
                                </select>
                                <p className="text-danger mx-auto">
                                    {errors.state?.message}
                                </p>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <button
                            className="w-100 btn btn-primary btn-lg"
                            type="submit"
                        >
                            Purchase
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
