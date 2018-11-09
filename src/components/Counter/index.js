import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CounterStore from '../../flux/stores/CounterStore'
import * as actions from '../../flux/action'
import cn from 'classnames'
import './style.css'

class Counter extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
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
            count: CounterStore.getCounterValues()[this.props.caption]
        });
    }
    onChang = (isAdd) => {
        const {caption}=this.props;
        if (isAdd) {
            actions.increment(caption);
            return;
        }
        actions.decrement(caption);
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
        CounterStore.addChangeListener(this.getValue);
    }

    componentWillMount() {
        CounterStore.removeChangeListener(this.getValue);
    }
}

export default Counter