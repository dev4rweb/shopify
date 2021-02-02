const ReducerData = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload
            };
        case "FETCH_LANG":
            return {
                ...state,
                lang: action.payload
            };
        case "IS_AUTH":
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case "FETCH_CHECKOUT":
            return {
                ...state,
                checkout: action.payload
            };
        case "FETCH_SHOP":
            return {
                ...state,
                shop: action.payload
            };
        case "ADD_TO_CART":
            return {
                ...state,
                checkout: action.payload
            };
        default:
            return state
    }
};

export default ReducerData