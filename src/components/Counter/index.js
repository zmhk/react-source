import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as actions from '../../redux/action'
import cn from 'classnames'
import './style.css'

class Counter extends Component {
    constructor(props) {
        super(...arguments);
    }

    static propTypes = {
        caption: PropTypes.string.isRequired,
        initialValue: PropTypes.number.isRequired
    }
    static defaultProps = {
        initialValue: 5
    }
    onChang = (isAdd) => {
        const {caption}=this.props;
        if (isAdd) {
            this.props.onIncrement()
            return;
        }
        this.props.onDecrement();
    }
    addClick = () => {
        this.onChang(true);
    }
    minusClick = () => {
        this.onChang(false);
    }
    render() {
        const { caption,values,name } = this.props;
        return (
            <div className={cn("counter", {
                checked: false
            })}>
                <span className="btn-action" onClick={this.addClick}>+</span>
                <span className="btn-action" onClick={this.minusClick}>-</span>
                <span>{caption}:{values}</span>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
   return {
       values:state[ownProps.caption]
   }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
       onIncrement:()=>{
        dispatch(actions.asyncIncrement(ownProps.caption))
       },
       onDecrement:()=>{
           dispatch(actions.decrement(ownProps.caption));
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)