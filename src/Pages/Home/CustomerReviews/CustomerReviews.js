import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./CustomerReviews.css";
const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    useEffect(() => {
        fetch("https://radiant-castle-55741.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((result) => {
                setReviews(result);
            });
    }, []);
    return (
        <div
            style={{ backgroundColor: "#FFFEF0" }}
            className="py-5 overflow-hidden"
        >
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div className="text-center  p-5 d-flex justify-content-center align-items-center flex-column gap-4">
                        <div>
                            <img
                                src={
                                    review.img
                                        ? review.img
                                        : "https://www.w3schools.com/howto/img_avatar.png"
                                }
                                alt=""
                                width="80px"
                                style={{ borderRadius: "50%" }}
                            />
                        </div>
                        <p>{review.feedback}</p>
                        <div>
                            <Rating
                                name="read-only"
                                value={review.rating}
                                readOnly
                            />
                        </div>
                        <h1>{review.userName}</h1>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomerReviews;
