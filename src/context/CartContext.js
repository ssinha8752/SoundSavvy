import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer";

const initialState={
    cartList:[],
    total: 0,
}


export const CartContext=createContext(initialState);

export const CartProvider = ({children}) => {
    
    const [state,dispatch]=useReducer(cartReducer,initialState)

    const addToCart = (product) => {
        const updatedCart = state.cartList.concat(product);
        const updatedTotal = state.total+product.price;
        dispatch({
            type:"ADD_TO_CART",
            payload : {
                products: updatedCart,
                total: updatedTotal
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCart = state.cartList.filter(current => current.id !== product.id);
        const updatedTotal = state.total-product.price;
        dispatch({
            type:"REMOVE_TO_CART",
            payload : {
                products: updatedCart,
                total: updatedTotal
            }
        })
    }

    const value={ 
        total:state.total,
        cartList:state.cartList,
        addToCart,
        removeFromCart
    }; 
    
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
            
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}

