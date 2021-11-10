import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/products">
                        <Purchase />
                    </Route>
                    <Route path="*">
                        <p>Not Found</p>
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
