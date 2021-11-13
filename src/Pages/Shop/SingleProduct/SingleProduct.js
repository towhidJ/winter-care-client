import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
const SingleProduct = () => {
    const location = useLocation();
    const history = useHistory();
    const { id } = useParams();

    const { price, img, productName, description, category, subtitle } =
        location.state;
    return (
        <>
            <Navigation />
            <div id="body" className="mt-5 pt-2 overflow-hidden">
                <div
                    className="card mb-3 "
                    style={{
                        maxWidth: "1400px",
                        margin: "5% auto",
                        backgroundColor: "#F5FFFA",
                    }}
                >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img
                                src={img}
                                className="card-img"
                                alt="Guide to Web Design"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">
                                    <strong>{productName}</strong>
                                </h4>
                                <h6 className="card-title">
                                    <strong>{subtitle}</strong>
                                </h6>

                                <Link
                                    to={{
                                        pathname: `/purchase/${id}`,
                                        state: {
                                            price,
                                            id,
                                            img: img,
                                            description,
                                            category,
                                            productName,
                                        },
                                    }}
                                    className="btn btn-outline-success bold-btn"
                                >
                                    Buy Now
                                </Link>
                                <div>
                                    <h4>Product Description</h4>
                                    <hr />
                                    <p className="card-text">{description}</p>
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

export default SingleProduct;
