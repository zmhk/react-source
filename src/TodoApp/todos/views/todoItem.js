import React, { PureComponent } from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'
import { removeTodo, toggleTodo } from '../actions'

class TodoItem extends PureComponent {
    constructor() {
        super(...arguments)
    }

    render() {
        const { id, completed, textValue } = this.props;
        return (
            <li className="todo-item">
                <span className={cn({ completed: completed })}>{textValue}</span>
                <span onClick={() => { this.props.onRemoveTodo(id) }}>删除</span>
                <span onClick={() => { this.props.onToggleTodo(id) }}>切换</span>
            </li>
        )
    }
}

const mapDispathcToProps = {
    onRemoveTodo: removeTodo,
    onToggleTodo: toggleTodo
}

export default connect(null, mapDispathcToProps)(TodoItem)