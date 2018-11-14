import React, { PureComponent } from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'
import { setFilter } from '../actions'

class Link extends PureComponent {
    constructor() {
        super(...arguments)
    }
    render() {
        const { type,active } = this.props
        return (
            <span className={cn("filter",{
                active:active
            })} onClick={()=>{
                this.props.setFilter(type);
            }}>{this.props.children}</span>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
     return{
         active:state.filter==ownProps.type
     }
}
const mapDispatchToProps = {
    setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
