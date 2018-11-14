import React,{PureComponent} from 'react'
import TodoItem from './todoItem'
import { connect } from 'react-redux';
import {FilterTypes} from "../../../constants"

class TodoList extends PureComponent{
    constructor(){
        super(...arguments)
    }

    render(){
        const {todos}=this.props
        return(
            <ul>
              {todos.map((item)=>{
                  return <TodoItem id={item.id} completed={item.completed} textValue={item.text} key={item.id}/>
              })}
            </ul>
        )
    }
}

const getCurrentTodos=(todos,filter)=>{
   switch(filter){
      case FilterTypes.ALL:
      return todos;
      case FilterTypes.COMPLETED:
      return todos.filter(item=>item.completed)
      case FilterTypes.UNCOMPLETED:
      return todos.filter(item=>!item.completed);
   }
}

const mapStateToProps=(state,ownProps)=>{
    console.log(getCurrentTodos(state.todos,state.filter));
    return {
        todos:getCurrentTodos(state.todos,state.filter)
    }
}

export default connect(mapStateToProps)(TodoList)