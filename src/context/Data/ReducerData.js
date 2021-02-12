const ReducerData = (state, action) => {
    // console.log(action);
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
        case "FETCH_COLLECTION":
            return {
                ...state,
                collection: action.payload
            };
        case "FETCH_CONFIG":
            return {
                ...state,
                config: action.payload
            };
        case "FETCH_GRAPH":
            return {
                ...state,
                graph: action.payload
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
        case "REMOVE_ITEM_IN_CART":
            return {
                ...state,
                checkout: action.payload
            };
        case "FILTER_BY_CATEGORY":
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state
    }
};

export default ReducerData