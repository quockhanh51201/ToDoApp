import { combineReducers } from 'redux'
import filtersReducer from "../components/Filters/FiltersSlice"
import todoReducer from "../components/Todo/TodoSlice"


const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoReducer
})
export default rootReducer