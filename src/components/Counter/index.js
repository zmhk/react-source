import React, { Component } from 'react'
import PropTypes from 'prop-types'
import store from '../../redux/store'
import * as actions from '../../redux/action'
import cn from 'classnames'
import './style.css'

class Counter extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            count: store.getState()[props.caption],
            unsubscribe:f=>f
        }
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
            count: store.getState()[this.props.caption]
        });
    }
    onChang = (isAdd) => {
        const {caption}=this.props;
        if (isAdd) {
            store.dispatch(actions.increment(caption))
            return;
        }
        store.dispatch(actions.decrement(caption))
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
        this.state.unsubscribe=store.subscribe(this.getValue);
    }

    componentWillMount() {
        this.state.unsubscribe(this.getValue);
    }
}

export default Counter