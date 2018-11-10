import * as actionTypes from './actionType'

const reducer=(state,action)=>{
    const {type,counterCaption}=action;
    switch(type){
       case actionTypes.INCREMENT:
       return {...state,[counterCaption]:state[counterCaption]+1}
       case actionTypes.DECREMENT:
       return {...state,[counterCaption]:state[counterCaption]-1}
       default:
       return state
    }
}

export default reducer;