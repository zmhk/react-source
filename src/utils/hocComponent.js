import React,{PureComponent} from 'react'

const hocComponent=(WrappedComponent)=>{
   return class WrappingComponent extends PureComponent{
       constructor(){
        super(...arguments);
       }
       render(){
           const {name,...others}=this.props
           return <WrappedComponent {...others}/>
       }
   }
}

export default hocComponent;

