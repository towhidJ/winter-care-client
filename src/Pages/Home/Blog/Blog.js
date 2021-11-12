import React from "react";

const Blog = () => {
    return (
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-5 container mx-auto">
            <div className="col">
                <div className="card">
                    <img
                        src="https://static.thcdn.com/images/small/original/app/uploads/sites/1160/2020/11/skin-care-products-feature_1636483444.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            Spoil Mom This Year with These Beauty Gifts
                        </h5>
                        <p className="card-text">
                            {`Thank her for her good genes with Sunday Riley’s The Big Glow Deluxe Good Genes Kit. This powerful 
                            features the  Good Genes All-In-One
                            Lactic Acid Treatment. For added oomph, the kit also
                            includes Pink Drink Firming and Resurfacing Essence,
                            which is a peptide-infused formula with a focus on
                            firming the complexion, and the Tidal Brightening
                            Enzyme Water Cream for all over soothing hydration`.slice(
                                0,
                                150
                            )}
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-warning">Read More</button>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <img
                        src="https://blogscdn.thehut.net/app/uploads/sites/1160/2021/10/1200-x-672_1633462901.png"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            6 Winter Skin Care Tips You Need to Know
                        </h5>
                        <p className="card-text">
                            {`The sun doesn’t take a day off, and you are no less susceptible to sun damage in the winter than in the summer. “Sunscreen is important year-round,” Dr. Zeichner notes.`.slice(
                                0,
                                150
                            )}
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-warning">Read More</button>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <img
                        src="https://static.thcdn.com/images/small/original/app/uploads/sites/1160/2021/10/isclinical-products-feature_1634599579.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">
                            Skin Care Gift Sets So Good, You’ll Want to Buy Them
                            for Yourself
                        </h5>
                        <p className="card-text">
                            {`
WITH DERMSTORE
 
First Aid Beauty Skin Fortune Kit
Revamp your skin care regimen with this start-to-finish gift set from First Aid Beauty. This set includes five standout products, including the Pure Skin Facial Cleanser to remove the day’s dirt and grime, Facial Radiance Pads for gentle exfoliation, Ultra Repair Hydrating Serum for a boost of nourishment, Ultra Repair Collagen Cream for firming and plumping the complexion, and Ultra Repair Cream for long-lasting hydration.`.slice(
                                0,
                                150
                            )}
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-warning">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
