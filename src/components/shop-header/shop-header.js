import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"

import "./shop-header.css";

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header">
            <Link to="/">
                <div className="logo text-dark">BookStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {numItems} items ${total ? total : 0}
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    const nums = cartItems.reduce((total, item) => {
        return total + item.count;
    }, 0)
    return {
        numItems: nums,
        total: orderTotal
    }
}

export default connect(mapStateToProps)(ShopHeader);