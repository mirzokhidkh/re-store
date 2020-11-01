import React, {Component} from "react";
import BookListItem from "../book-list-item/book-list-item";

import {bindActionCreators} from "redux";
import {connect} from "react-redux"

import {withBookstoreService} from "../hoc"
import {bookAddedToCart, fetchBooks} from "../../actions";
import {compose} from "../../utils";

import Loader from "../loader/loader"
import ErrorIndicator from "../error-indicator/error-indicator";
import "./book-list.css"

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}


class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {

        const {books, loading, error, onAddedToCart} = this.props;

        if (loading) {
            return <Loader/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>

    }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return {books, loading, error}
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);