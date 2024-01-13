import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./../../../../hooks/useAuth";
import "./Orders.css";
const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const [st, setSt] = useState(0);
    const [loadorder, setLoadOrder] = useState(true);

    const emaila = {
        email: user.email,
    };
    useEffect(() => {
        setLoadOrder(true);
        fetch("http://localhost:5000/orders/byEmail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(emaila),
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setSt(0);
                setLoadOrder(false);
            });
    }, []);

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to cancel this order?")) {
            // eslint-disable-next-line no-lone-blocks
            {
                fetch(
                    `http://localhost:5000/orders/${id}`,
                    {
                        method: "Delete",
                        headers: { "Content-Type": "application/json" },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        setSt(1);

                        toast.error("Order Delete Success!");
                    });
            }
        }
    };

    return (
        <div className="mt-5 pt-5">
            <div className="container mx-auto px-5 table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Or. Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Status</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {loadorder ? (
                        <div className=" d-flex justify-content-center align-items-center">
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <th scope="row">{order._id}</th>
                                    <td>{order.customerName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.date}</td>
                                    <td>{order.price}</td>
                                    <td>{order.qty}</td>
                                    <td
                                        className={
                                            order.status === "Pending"
                                                ? "pending"
                                                : order.status === "OnGoing"
                                                ? "ongoing"
                                                : order.status === "Processing"
                                                ? "processing"
                                                : order.status === "Shipped"
                                                ? "shipped"
                                                : "complete"
                                        }
                                    >
                                        {order.status}
                                    </td>
                                    <td>
                                        {order.payment ? (
                                            "Paid"
                                        ) : (
                                            <Link
                                                to={`/dashboard/payment/${order._id}`}
                                                className=""
                                            >
                                                <button>Pay</button>
                                            </Link>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                deleteHandler(order._id)
                                            }
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default Orders;
