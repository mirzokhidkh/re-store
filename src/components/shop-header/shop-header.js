import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import "./shop-header.css"

const ShopHeader = ({numItems, total}) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"/>
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
};


const mapStateToProps = ({shopHeader:{numItems,total}}) => {
    return {
        numItems,
        total
    }
};

// const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
//     const nums=cartItems.reduce((total,value)=>{
//         return total+value.count;
//     },0);
//     return {
//         numItems: nums,
//         total: orderTotal
//     }
// };

export default connect(mapStateToProps)(ShopHeader);
