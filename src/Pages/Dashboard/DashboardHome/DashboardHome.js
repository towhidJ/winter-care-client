import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import useAuth from "./../../../hooks/useAuth";
const DashboardHome = () => {
    const [dashboard, setDashboard] = useState({});
    const [loading, setLoading] = useState(true);
    const { admin } = useAuth();
    useEffect(() => {
        setLoading(true);
        fetch("https://radiant-castle-55741.herokuapp.com/dashboard/")
            .then((res) => res.json())
            .then((result) => {
                setDashboard(result);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            {admin ? (
                loading ? (
                    <CircularProgress />
                ) : (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                elevation={3}
                                sx={{ py: 5, px: 2 }}
                                className="text-center"
                                style={{ backgroundColor: "lightyellow" }}
                            >
                                <Typography variant="h4" component="h6">
                                    Total Customer
                                </Typography>
                                <Typography variant="h3" component="h6">
                                    {dashboard.userCount}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                elevation={3}
                                sx={{ py: 5, px: 2 }}
                                className="text-center"
                                style={{ backgroundColor: "lightgreen" }}
                            >
                                <Typography variant="h4" component="h6">
                                    Total Order
                                </Typography>
                                <Typography variant="h3" component="h6">
                                    {dashboard.orderCount}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                className="text-center"
                                elevation={3}
                                sx={{ py: 5, px: 2 }}
                                style={{ backgroundColor: "lightcyan" }}
                            >
                                <Typography variant="h4" component="h6">
                                    Total Product
                                </Typography>
                                <Typography variant="h3" component="h6">
                                    {dashboard.productCount}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                )
            ) : (
                <>
                    <div className="text-center">
                        <h1>Welcome To Winter Shop Dash board</h1>
                    </div>
                </>
            )}
        </div>
    );
};

export default DashboardHome;
