import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import PrivateRoute from "../../Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Orders from "../Orders/Orders/Orders";
import AddProduct from "../Products/AddProduct/AddProduct";
import ManageProducts from "../Products/ManageProducts/ManageProducts";
import useAuth from "./../../../hooks/useAuth";
import AdminRoute from "./../../Login/AdminRoute/AdminRoute";
import DashboardHome from "./../DashboardHome/DashboardHome";
import ManageAllOrder from "./../Orders/ManageAllOrder/ManageAllOrder";
import Review from "./../Review/Review";
import "./Dashboard.css";
const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/" id="link">
                <Button color="inherit">Home</Button>
            </Link>
            <br />
            <Link to={`${url}`} id="link">
                <Button color="inherit">Dashboard</Button>
            </Link>
            <Divider />

            {!admin && (
                <>
                    <Link to={`${url}/orders`} id="link">
                        <Button color="inherit">My Orders</Button>
                    </Link>
                    <Link to={`${url}/review`} id="link">
                        <Button color="inherit">User Review</Button>
                    </Link>
                </>
            )}
            <br />
            {admin && (
                <Box>
                    <Link to={`${url}/makeAdmin`} id="link">
                        <Button color="inherit">Make Admin</Button>
                    </Link>
                    <Divider />
                    <Link to={`${url}/addProduct`} id="link">
                        <Button color="inherit">Add Product</Button>
                    </Link>
                    <Link to={`${url}/manageAllProducts`} id="link">
                        <Button color="inherit">Manage Products</Button>
                    </Link>
                    <Divider />
                    <Link to={`${url}/manageAllOrders`} id="link">
                        <Button color="inherit">Manage Orders</Button>
                    </Link>
                </Box>
            )}
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllProducts`}>
                        <ManageProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrder />
                    </AdminRoute>
                    <PrivateRoute path={`${path}/orders`}>
                        <Orders></Orders>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review></Review>
                    </PrivateRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
