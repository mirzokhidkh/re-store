import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomePage, CartPage} from "../pages";
import ShopHeader from "../shop-header";

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    return (
        <main className="container ">
            {/*<ShopHeader numItems={5} total={210}/>*/}
            <ShopHeader />
            <Switch>
                <Route path="/"
                       component={HomePage}
                       exact/>

                <Route path="/cart"
                       component={CartPage}
                />
            </Switch>
        </main>

    )
};

export default App;
