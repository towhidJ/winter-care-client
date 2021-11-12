import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Purchase from "./Pages/Purchase/Purchase";
import Products from "./Pages/Shop/Products/Products";
import SingleProduct from "./Pages/Shop/SingleProduct/SingleProduct";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <AuthProvider>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/shop">
                            <Products />
                        </Route>
                        <Route path="/s/:id">
                            <SingleProduct />
                        </Route>
                        <PrivateRoute path="/purchase/:id">
                            <Purchase />
                        </PrivateRoute>

                        <Route path="*">
                            <p>Not Found</p>
                        </Route>
                    </Switch>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
