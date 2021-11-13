import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useAuth from "./../../../hooks/useAuth";
import Footer from "./../../Shared/Footer/Footer";
import Navigation from "./../../Shared/Navigation/Navigation";
import "./Login.css";

const Login = () => {
    const { loginUser, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    //React Hooks VAlidation
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm(formOptions);

    const onSubmit = (data) => {
        loginUser(data.email, data.password, location, history);
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <>
            <Navigation></Navigation>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">
                                    Sign In
                                </h5>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="name@example.com"
                                            {...register("email")}
                                        />
                                        <label htmlFor="email">
                                            Email address
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            {...register("password")}
                                        />
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            className="btn btn-primary btn-login text-uppercase fw-bold"
                                            type="submit"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                    {authError !== "" ? (
                                        <div
                                            class="alert alert-danger"
                                            role="alert"
                                        >
                                            {authError}
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                </form>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button
                                        className="btn btn-google btn-login text-uppercase fw-bold"
                                        onClick={handleGoogleSignIn}
                                    >
                                        <i className="fab fa-google me-2"></i>{" "}
                                        Sign in with Google
                                    </button>
                                </div>
                                <div className="d-grid">
                                    <p className="text-primary text-center">
                                        <Link to="/register">
                                            Create New Account
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
