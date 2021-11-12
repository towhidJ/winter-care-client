import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";

const Payment = () => {
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
                <h1>Payment System Coming Soon......</h1>
            </Paper>
        </Box>
    );
};

export default Payment;
