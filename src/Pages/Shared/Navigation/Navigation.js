import React from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg  fixed-top shadow-lg mb-5">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    Winter Care Cream
                </Link>
                <button
                    className="navbar-toggler custom-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link active"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link ">
                                Shop
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link ">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link ">
                                Contact Us
                            </Link>
                        </li>

                        {user?.email && (
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link ">
                                    Dashboard
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div className="py-2">
                        {
                            <Link
                                to="/"
                                className="px-2 py-2 text-decoration-none text-black"
                            >
                                {user?.displayName}
                            </Link>
                        }
                        {user?.email ? (
                            <button
                                onClick={logout}
                                className="btn btn-warning text-white"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-warning text-white"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
