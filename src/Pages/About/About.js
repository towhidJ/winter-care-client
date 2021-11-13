import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const About = () => {
    return (
        <>
            <Navigation />
            <div className="mt-5 pt-5">
                <div className="container mt-5 mb-2">
                    <div className="text-center">
                        <h1 className="search-text">
                            About
                            <span className="search-heading-text"> Us</span>
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="container mt-5 mb-2">
                    <div className="text-center">
                        <h1 className="search-text">
                            Winter Care Cream shop
                            <span className="search-heading-text"> Story</span>
                        </h1>
                        <p className="w-50 mx-auto fw-medium p-3">
                            Enthusiastically mesh long-term high-impact
                            infrastructures vis-a-vis efficient customer
                            service. Professionally fashion wireless leadership
                            rather than prospective experiences.
                        </p>
                        <p className="w-75 mx-auto fw-medium p-3">
                            Winter-care shop is the ultimate online shopping
                            destination for Bangladesh offering completely
                            hassle-free shopping experience through secure and
                            trusted gateways. We offer you trendy and reliable
                            shopping with all your favorite brands and more. Now
                            shopping is easier, faster and always joyous. We
                            help you make the right choice here. PriyoShop.com
                            has been launched in February 2013. PriyoShop.com
                            showcases products from all categories such as
                            clothing, footwear, jewelry, accessories,
                            electronics, appliance, health care, beauty
                            products, and still counting! Our collection
                            combines the latest in fashion trends as well as the
                            all-time favorites. Our products are exclusively
                            selected for you. We, at PriyoShop, have all that
                            you need under one umbrella. In tune with the vision
                            Digital Bangladesh, PriyoShop.com opens the doorway
                            for everybody to shop over the Internet. We
                            constantly update with lot of new products, services
                            and special offers. We provide on-time delivery of
                            products and quick resolution of any concerns. We
                            provide our customers with memorable online shopping
                            experience. Our dedicated PriyoShop quality
                            assurance team works round the clock to personally
                            make sure the right packages reach on time. You can
                            choose whatever you like. We deliver it right at
                            your address across Bangladesh. Our services are at
                            your doorsteps all the time. Get the best products
                            with the best online shopping experience every time.
                            You will enjoy online shopping here!
                        </p>
                    </div>
                </div>

                <div className="container mt-5 mb-2">
                    <div className="text-center">
                        <h1 className="search-text">
                            Our
                            <span className="search-heading-text">
                                {" "}
                                Mission
                            </span>
                        </h1>
                        <p className="w-50 mx-auto fw-medium p-3">
                            Dynamically reinvent market-driven opportunities and
                            ubiquitous interfaces. Energistically fabricate an
                            expanded array of niche markets through robust
                            strategic web-readiness.
                        </p>
                        <p className="w-75 mx-auto fw-medium p-3">
                            Compellingly embrace empowered e-business after user
                            friendly intellectual capital. Interactively
                            actualize front-end processes with effective
                            convergence. Synergistically deliver performance
                            based methods of empowerment whereas distributed
                            expertise. Efficiently enable enabled sources and
                            cost effective products. Completely synthesize
                            principle-centered information after ethical
                            communities. Efficiently innovate open-source
                            infrastructures via inexpensive materials.
                            Objectively integrate enterprise-wide strategic
                            theme areas with functionalized infrastructures.
                            Interactively productize premium technologies
                            whereas interdependent quality vectors. Rapaciously
                            utilize enterprise experiences via 24/7 markets.
                        </p>
                    </div>
                </div>

                <div className="container mt-5 mb-2">
                    <div>
                        <h5 className="text-center">DEDICATED TOUR GUIDES</h5>
                        <h1 className="search-text text-center">
                            Our
                            <span className="search-heading-text"> Team</span>
                        </h1>
                        <p className="w-50 mx-auto fw-medium p-3">
                            Completely pursue scalable customer service through
                            sustainable potentialities. Holistically pontificate
                            installed base portals. Dynamically innovate
                            resource-leveling customer service.
                        </p>
                        <div className="row row-cols-lg-3 gx-5">
                            <div className="col">
                                <div className="card">
                                    <img
                                        src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/people-03.jpg"
                                        className="card-img-top w-full p-0"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Emma Nielsen
                                        </h5>
                                        <p className="card-text">
                                            Enthusiastically mesh long-term
                                            high-impact infrastructures
                                            vis-a-vis efficient customer
                                            service.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img
                                        src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/people-01.jpg"
                                        className="card-img-top w-full p-0"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Adil Rasid
                                        </h5>
                                        <p className="card-text">
                                            Objectively integrate
                                            enterprise-wide strategic theme
                                            areas with functionalized
                                            infrastructures.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img
                                        src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/people-04.jpg"
                                        className="card-img-top w-full p-0"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Quic Jhon
                                        </h5>
                                        <p className="card-text">
                                            Professionally fashion wireless
                                            leadership rather than prospective
                                            experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
