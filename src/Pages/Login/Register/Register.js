import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import "../Login/Login.css";
import useAuth from "./../../../hooks/useAuth";

const Register = () => {
    const history = useHistory();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm(formOptions);

    const { registerUser, loginWithGoogle } = useAuth();
    const onSubmit = (data) => {
        console.log(data);
        registerUser(data.email, data.password, data.name, history);
    };
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">
                                Sign Up
                            </h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-floating mb-3">
                                    <input
                                        {...register("name")}
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter Your Name"
                                    />
                                    <label htmlFor="name">Name</label>
                                    <span className="text-danger">
                                        {errors.name?.message}
                                    </span>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        {...register("email")}
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="email">Email address</label>
                                    <span className="text-danger">
                                        {errors.email?.message}
                                    </span>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                        {...register("password")}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <span className="text-danger">
                                        {errors.password?.message}
                                    </span>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Re-Type your Password"
                                        {...register("confirmPassword")}
                                    />
                                    <label htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <span className="text-danger">
                                        {errors.confirmPassword?.message}
                                    </span>
                                </div>

                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-login text-uppercase fw-bold"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div className="d-grid">
                                    <p className="text-primary text-center">
                                        <Link to="/login">
                                            Already Have an Account
                                        </Link>
                                    </p>
                                </div>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button
                                        className="btn btn-google btn-login text-uppercase fw-bold"
                                        onClick={loginWithGoogle}
                                        type="button"
                                    >
                                        <i className="fab fa-google me-2"></i>{" "}
                                        Sign in with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
