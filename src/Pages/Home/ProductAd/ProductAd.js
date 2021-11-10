import React from "react";
import hydra from "../../../images/HYDRA.jpg";
const ProductAd = () => {
    return (
        <div style={{ backgroundColor: "white" }} className="mt-3">
            <div className="row justify-content-between align-items-center container mx-auto gx-5">
                <div className="col-12 col-lg-4">
                    <div>
                        <img src={hydra} alt="HYDRA" className="img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-lg-8 ">
                    <div className="ms-lg-5 ps-lg-5">
                        <h1>Jahir Store</h1>
                        <p>
                            Factory is made up of two certified organic
                            properties.
                        </p>
                        <div className="">
                            <h5>Sheva Poliva Ankana</h5>
                            <p>Manager Winter care Shop</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductAd;
