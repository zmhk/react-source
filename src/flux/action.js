import Dispatcher from './dispatch'
import * as actionTypes from './actionType'

export const increment=(counterCaption)=>{
  Dispatcher.dispatch({
      type:actionTypes.INCREMENT,
      counterCaption:counterCaption
  })
}

export const decrement=(counterCaption)=>{
    Dispatcher.dispatch({
        type:actionTypes.DECREMENT,
        counterCaption:counterCaption
    })
  }