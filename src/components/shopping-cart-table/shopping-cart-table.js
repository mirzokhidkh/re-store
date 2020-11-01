import React, {Component} from "react";
import {connect} from "react-redux";
import "./shopping-cart-table.css";

import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart
} from "../../actions/index";

class ShoppingCartTable extends Component {

    render() {
        const {items, total, onDelete, onIncrease, onDecrease} = this.props;

        const renderRow = (item, idx) => {
            const {id, title, count, total} = item;

            console.log("CartItems", items)
            return (
                <tr key={id}>
                    <td>{idx + 1}</td>
                    <td>{title}</td>
                    <td>{count}</td>
                    <td>${total}</td>
                    <td>
                        <div className="btn-group-sm buttons">
                            <button className="btn btn-outline-danger"
                                    onClick={() => onDelete(id)}
                            ><i className="fa fa-trash"/>
                            </button>
                            <button className="btn btn-outline-success"
                                    onClick={() => onIncrease(id)}
                            ><i className="fa fa-plus-circle"/>
                            </button>
                            <button className="btn btn-outline-warning"
                                    onClick={() => onDecrease(id)}
                            ><i className="fa fa-minus-circle"/>
                            </button>
                        </div>
                    </td>
                </tr>
            )
        };

        if (!items.length) {
            return (
                <p className="text-center mt-5">The table is empty</p>
            )
        }

        return (
            <div className="shop-cart-table">
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(renderRow)}
                    </tbody>
                </table>

                <div className="total">
                    {total ? `Total: ${total} ` : null}
                </div>
            </div>
        )
    }


}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBookRemovedFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);