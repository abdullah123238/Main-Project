export const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {

        case "Add_To_Cart":
            return {...state, cartList: payload.products, total: payload.total};

        case "Remove_From_Cart":
            return {...state, cartList: payload.products, total: payload.total};

        case "Clear_Cart":
            return {...state, cartList: payload.products, total: payload.total};

        default:
            throw new Error("No case found")
        
    }
}