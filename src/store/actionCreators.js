import {ADD_ITEM,DELETE_ITEM} from './actionTypes';

export const getAddItemAction= (value)=>{
    return {
        type:ADD_ITEM,
        value
    }
}

export const getDeleteAction = (index)=>{
    return {
        type:DELETE_ITEM,
        value:index
    }
}
    