function doNothingMiddleware({dispatch,getState}){
      return function(next){
         return function(action){
             console.log(action.type);
             next(action);
         }
      }
}

export {doNothingMiddleware}