import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as actions from '../../redux/action'
import cn from 'classnames'
import './style.css'

class Counter extends Component {
    constructor(props,context) {
        super(...arguments);
        this.state = {
            count: context.store.getState()[props.caption],
            unsubscribe:f=>f
        }
    }
    static contextTypes={
        store:PropTypes.object
    }
    static propTypes = {
        caption: PropTypes.string.isRequired,
        initialValue: PropTypes.number.isRequired
    }
    static defaultProps = {
        initialValue: 5
    }
    getValue = () => {
        this.setState({
            count: this.context.store.getState()[this.props.caption]
        });
    }
    onChang = (isAdd) => {
        const {caption}=this.props;
        if (isAdd) {
            this.context.store.dispatch(actions.increment(caption))
            return;
        }
        this.context.store.dispatch(actions.decrement(caption))
    }
    addClick = () => {
        this.onChang(true);
    }
    minusClick = () => {
        this.onChang(false);
    }
    render() {
        const { caption } = this.props;
        const { count } = this.state;
        return (
            <div className={cn("counter", {
                checked: false
            })}>
                <span className="btn-action" onClick={this.addClick}>+</span>
                <span className="btn-action" onClick={this.minusClick}>-</span>
                <span>{caption}:{count}</span>
            </div>
        )
    }

    componentDidMount() {
        this.state.unsubscribe=this.context.store.subscribe(this.getValue);
    }

    componentWillMount() {
        this.state.unsubscribe(this.getValue);
    }
}

export default Counter