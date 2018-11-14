import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes'

let nextTodoId=0;

export const addTodo=(text)=>{
    return {
        type:ADD_TODO,
        id:nextTodoId++,
        text:text,
        completed:false,
    }
}

export const removeTodo=(id)=>{
    return {
        type:REMOVE_TODO,
        id:id
    }
}

export const toggleTodo=(id)=>{
    return {
        type:TOGGLE_TODO,
        id:id
    }
}