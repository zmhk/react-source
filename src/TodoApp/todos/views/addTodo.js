import React, { PureComponent } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodo extends PureComponent {
    constructor() {
        super(...arguments)
        this.state = {
            itemValue: ""
        }
    }
    itemChange = (e) => {
        this.setState({
            itemValue: e.target.value
        })
    }

    addClick = () => {
        const { itemValue } = this.state;
        itemValue && this.props.addItem(itemValue);
        this.setState({ itemValue: '' })
    }

    render() {
        const { itemValue } = this.state;
        return (
            <div className="add-todo">
                <input type='text' value={itemValue} className="add-todo-input" onChange={this.itemChange} />
                <input type='button' value="确认" className="add-todo-btn" onClick={this.addClick} />
            </div>
        )
    }
}
const mapDispatchToProps = {
    addItem: addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo);

