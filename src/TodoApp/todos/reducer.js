import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{
                id: action.id,
                text: action.text,
                completed: false
            }, ...state]
        case REMOVE_TODO:
            return state.filter((item, index) => {
                return item.id !== action.id
            });
        case TOGGLE_TODO:
            return state.map((item) => {
                if (item.id == action.id) {
                    return { ...item, completed: !item.completed }
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
}