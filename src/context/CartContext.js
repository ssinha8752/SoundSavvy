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
        dispatch({
            type:"ADD_TO_CART",
            payload : {
                products: updatedCart
            }
        })
        updateTotal(updatedCart)
    }

    const removeFromCart = (product) => {
        const updatedCart = state.cartList.filter(current => current.id !== product.id);
        dispatch({
            type:"REMOVE_TO_CART",
            payload : {
                products: updatedCart
            }
        })
        updateTotal(updatedCart)
    }

    const updateTotal = (products) => {
        let total=0;
        products.forEach(product=>total=total+product.price);
        console.log(total)
        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                total
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

