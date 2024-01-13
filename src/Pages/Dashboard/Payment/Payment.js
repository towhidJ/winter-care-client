import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51Jvx26B3kyu6eQ9fCo4tt2T84XHZEqwcp8vXV8fe2xkrAM25rXbZ6ndTj2mBsWStM4ZlJwrStGbmtLj0elRziSoX00GeNMgCNV"
);
const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrder(data);
            });
    }, [id]);
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    m: 1,
                    width: "100%",
                    height: 400,
                },
            }}
        >
            <Paper elevation={3} className="text-center align-content-center">
                <div>
                    <h2>
                        Please Pay for: {order.customerName} for{" "}
                        {order.productName}
                    </h2>
                    <h4>Pay: ${order.price}</h4>
                    {order?.price && (
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    )}
                </div>
            </Paper>
        </Box>
    );
};

export default Payment;
