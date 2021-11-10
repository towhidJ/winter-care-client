import Slider from "react-slick";
import "./CustomerReviews.css";
const CustomerReviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div
            style={{ backgroundColor: "#FFFEF0" }}
            className="py-5 overflow-hidden"
        >
            <Slider {...settings}>
                <div className="text-center  p-5 d-flex justify-content-center align-items-center flex-column gap-4">
                    <div>
                        <img
                            src="https://www.w3schools.com/howto/img_avatar.png"
                            alt=""
                            width="80px"
                            style={{ borderRadius: "50%" }}
                        />
                    </div>
                    <p>sgdfdsgfd</p>
                    <h1>Name</h1>
                </div>
            </Slider>
        </div>
    );
};

export default CustomerReviews;
