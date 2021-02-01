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
        default:
            return state
    }
};

export default ReducerData