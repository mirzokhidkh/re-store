import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from "../shop-header/shop-header"

import "./app.css"

class App extends Component {
    render() {
        return (
            <div className="app container">
                <ShopHeader/>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/cart" component={CartPage}/>
                </Switch>
            </div>
        );
    }
}

App.propTypes = {};

export default App;