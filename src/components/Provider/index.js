import React,{Component} from 'react'
import propTypes from 'prop-types'

class Provider extends Component{
    constructor(){
        super(...arguments);
    }
    static childContextTypes={
        store:propTypes.object
    }
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        const {store,children}=this.props;
        return children;
    }
}

export default Provider