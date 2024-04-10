export const cartReducer = (state,action) => {
    const {type,payload}=action;

    switch(type){
        case "ADD_TO_CART": return {...state, cartList: payload.products, total:payload.total}
        case "UPDATE_TOTAL": return {...state, total:payload.total}
        case "REMOVE_TO_CART": return {...state, cartList: payload.products}
        default: throw new Error ("No Case")
    }
}