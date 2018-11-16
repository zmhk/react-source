import React,{PureComponent} from 'react'

const hocComponent=(WrappedComponent)=>{
   return class WrappingComponent extends PureComponent{
       constructor(){
        super(...arguments);
       }
       render(){
           return <WrappedComponent {...this.props}/>
       }
   }
}

export default hocComponent;

