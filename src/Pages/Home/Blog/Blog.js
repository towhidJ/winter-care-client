import React from "react";

const Blog = () => {
    return (
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-5 container mx-auto">
            <div className="col">
                <div className="card">
                    <img
                        src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/destination-berlin-07-800x533.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
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
                        src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/oslo-01-1280x640.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
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
                        src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/destination-barcelona-02-800x533.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
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
