import {ADD_ITEM,DELETE_ITEM} from './actionTypes';

const defaultState={
    inputValue:'',
    list:[]
}

export default (state = defaultState,action)=>{
    
    if(action.type === ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));//depply copy
        newState.inputValue = action.value;
        newState.list.push(action.value)
        newState.inputValue='';
        return newState
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));//depply copy
        newState.list.splice(action.value,1)
        newState.inputValue='';
        return newState
    }

    return state;
}