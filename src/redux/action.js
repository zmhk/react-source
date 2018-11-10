import * as actionTypes from './actionType'

export const increment=(counterCaption)=>{
  return {
      type:actionTypes.INCREMENT,
      counterCaption:counterCaption
  }
}

export const decrement=(counterCaption)=>{
    return {
        type:actionTypes.DECREMENT,
        counterCaption:counterCaption
    }
  }