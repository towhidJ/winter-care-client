import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import "../Orders/Orders.css";
import useAuth from "./../../../../hooks/useAuth";

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loadorder, setLoadOrder] = useState(true);
    const { user } = useAuth();
    const [st, setSt] = useState(0);
    useEffect(() => {
        setLoadOrder(true);
        fetch("http://localhost:5000/orders/")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setSt(0);
                setLoadOrder(false);
            });
    }, [st]);

    const changHandler = (data, id) => {
        console.log(data);
        fetch(`http://localhost:5000/status/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: data }),
        })
            .then((res) => res.json())
            .then((data) => {
                setSt(1);
                toast.success("Status Updatetd successfully");
            });
    };

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
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
        <div className="">
            <div className="container mt-5 mb-2">
                <div className="text-center">
                    <h1 className="search-text">
                        Manage
                        <span className="search-heading-text"> Order</span>
                    </h1>
                    <hr />
                </div>
            </div>
            <div className="container table-responsive mx-auto px-5">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quentity</th>
                            <th scope="col">Or. Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
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
                                    <td>{order.qty}</td>
                                    <td>{order.date}</td>
                                    <td>{order.price}</td>
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
                                        {order.status !== "Complete" ? (
                                            <select
                                                className={
                                                    order.status === "Pending"
                                                        ? "pending"
                                                        : order.status ===
                                                          "OnGoing"
                                                        ? "ongoing"
                                                        : order.status ===
                                                          "Processing"
                                                        ? "processing"
                                                        : order.status ===
                                                          "Shipped"
                                                        ? "shipped"
                                                        : "complete"
                                                }
                                                onChange={(e) =>
                                                    changHandler(
                                                        e.target.value,
                                                        order._id
                                                    )
                                                }
                                            >
                                                <option
                                                    className="pending"
                                                    value="Pending"
                                                >
                                                    {order.status}
                                                </option>
                                                <option
                                                    className="processing"
                                                    value="Processing"
                                                >
                                                    Processing
                                                </option>
                                                <option
                                                    className="ongoing"
                                                    value="OnGoing"
                                                >
                                                    On Going
                                                </option>
                                                <option
                                                    className="shipped"
                                                    value="Shipped"
                                                >
                                                    Shipped
                                                </option>
                                                <option
                                                    className="complete"
                                                    value="Complete"
                                                >
                                                    Complete
                                                </option>
                                            </select>
                                        ) : (
                                            order.status
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

export default ManageAllOrder;
