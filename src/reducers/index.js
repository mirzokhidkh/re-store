import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";
import updateShopHeader from "./shop-header";

const reducer = (state, action) => {
    const shoppingCart = updateShoppingCart(state, action);

    return {
        bookList: updateBookList(state, action),
        shoppingCart: shoppingCart,
        shopHeader: updateShopHeader(shoppingCart)
    };
};

export default reducer;