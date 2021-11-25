import React, { useState } from "react";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "./../Shared/Footer/Footer";
import "./Contact.css";
const Contact = () => {
    const initValue = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };
    const [contact, setContacts] = useState(initValue);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newContact = { ...contact };
        newContact[field] = value;
        setContacts(newContact);
    };
    const handleSubmit = (e) => {
        console.log(contact);
        e.target.reset();
        e.preventDefault();
    };

    return (
        <>
            <Navigation></Navigation>
            <div className="mt-5 pt-5">
                <div className="container mt-5 mb-2">
                    <div className="text-center">
                        <h1 className="search-text">
                            Contact
                            <span className="search-heading-text"> Us</span>
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="container row row-cols-1 justify-content-center row-cols-lg-2">
                    <div className="col mt-5 mb-2">
                        <div className="text-center">
                            <h1 className="search-text">
                                Get in
                                <span className="search-heading-text">
                                    {" "}
                                    touch
                                </span>
                            </h1>
                            <p className="w-75 mx-auto  fw-medium p-3">
                                Enthusiastically mesh long-term high-impact
                                infrastructures vis-a-vis efficient customer
                                service. Professionally fashion wireless
                                leadership rather than prospective experiences.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3">
                            <div className="text-center">
                                <h1>
                                    <i
                                        className="fas fa-map-marked-alt"
                                        style={{ color: "orangered" }}
                                    ></i>
                                </h1>
                                <h1>Address</h1>
                                <p>295 S Chittagong</p>
                            </div>
                            <div className="text-center">
                                <h1>
                                    <i
                                        className="fas fa-headset"
                                        style={{ color: "orangered" }}
                                    ></i>
                                </h1>
                                <h1>Call us</h1>
                                <p>+8801521401825</p>
                            </div>
                            <div className="text-center">
                                <h1>
                                    <i
                                        className="fas fa-map-marked-alt"
                                        style={{ color: "orangered" }}
                                    ></i>
                                </h1>
                                <h1>Write Us</h1>
                                <p>office@winter.com</p>
                                <p>info@wintercare.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container contact-form">
                <div class="contact-image">
                    <img
                        src="https://image.ibb.co/kUagtU/rocket_contact.png"
                        alt="rocket_contact"
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <h3>Drop Us a Message</h3>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="form-group my-2">
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    placeholder="Your Name *"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <div class="form-group my-2">
                                <input
                                    type="text"
                                    name="email"
                                    class="form-control"
                                    placeholder="Your Email *"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                            <div class="form-group my-2">
                                <input
                                    type="text"
                                    name="phone"
                                    class="form-control"
                                    placeholder="Your Phone Number *"
                                    onBlur={handleOnBlur}
                                />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group my-2">
                                <textarea
                                    name="message"
                                    class="form-control"
                                    placeholder="Your Message *"
                                    style={{ height: "100%", width: "100%" }}
                                    onBlur={handleOnBlur}
                                ></textarea>
                            </div>
                        </div>
                        <div class="form-group my-2">
                            <input
                                type="submit"
                                name="btnSubmit"
                                class="btnContact"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
