import React from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "./../Shared/Footer/Footer";

const NotFound = () => {
    return (
        <>
            <Navigation />
            <div className="container mx-auto text-center">
                <div
                    className="flex justify-center items-center"
                    style={{ padding: "120px" }}
                >
                    <div>
                        <h1>404 Page Not Found</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
