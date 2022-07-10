import { ActionTypes } from "../contents/action-type"

export const setProducts = (products) => {
  
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
  
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: product,
    }
}