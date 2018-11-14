import React, { PureComponent } from 'react'
import TodoList from './todoList'
import AddTodo from './addTodo'
import './style.css'

class Todos extends PureComponent {
    constructor() {
        super(...arguments);
    }
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}

export default Todos