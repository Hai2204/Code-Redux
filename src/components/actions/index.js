import * as types from '../constants/actionType';


export const addToCard = (product, quantity) => {
    return {
        type: types.ADD_TO_CARD,
        product,
        quantity
    }
}
export const actionChangeMessage = (message) => {
    return { 
        type: types.CHANGE_MESSAGE,
        message
    }
}
export const removeCard = (product) => {
    return {
        type: types.REMOVE_CARD,
        product,
    }
}
export const upDateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY_INCARD,
        product,
        quantity
    }
}