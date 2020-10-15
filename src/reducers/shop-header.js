const updateShopHeader = ({cartItems, orderTotal}) => {

    if (cartItems === null) {
        return {
            numItems: 0,
            total: 0
        };
    }

    const numItems = cartItems.reduce((total, value) => {
        return total + value.count;
    }, 0);

    return {
        numItems: numItems,
        total: orderTotal
    }
};

export default updateShopHeader;
