import React from "react";
import CountUp from "react-countup";
import "./Info.css";
const Info = () => {
    return (
        <div className="bannerBk my-3 py-5">
            <div className=" container row row-cols-1 row-cols-lg-3 justify-content-center text-center mx-auto g-3">
                <div>
                    <h2 className="info-text">
                        <CountUp end="2500" duration=".8" />
                    </h2>
                    <h5 className="">Customers</h5>
                </div>
                <div>
                    <h2 className="info-text">
                        <CountUp end="700" duration=".8" />{" "}
                    </h2>
                    <h5>Satisfied client</h5>
                </div>
                <div>
                    <h2 className="info-text">
                        <CountUp end="375" duration=".8" />{" "}
                    </h2>
                    <h5>Special Offer</h5>
                </div>
            </div>
        </div>
    );
};

export default Info;
