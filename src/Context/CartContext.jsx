import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducers";


const cartInitialstate = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialstate)

export const CartProvider =({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialstate)


    const addToCart = (product) => {
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price

        dispatch ({
            type: "Add_To_Cart",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    const removeFromCart = (product) => {

        const updatedList = state.cartList.filter(item => item.id !== product.id)

        const updatedTotal = state.total - product.price;


        dispatch({
            type: "Remove_From_Cart",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    const clearCart = () => {
        dispatch({
            type: "Clear_Cart",
            payload: {
                products: [],
                total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => {
    const context = useContext(CartContext)
    return context
}