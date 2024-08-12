import { createSelector } from 'reselect'
import { IState } from "../Interface";


export const searchTextSelector = (state: IState) => state.filters.search
export const filterStatusSelector = (state: IState) => state.filters.status
export const filterPrioritySelector = (state: IState) => state.filters.priority
export const todoListSelector = (state: IState) => state.todoList

export const todosRemaining = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritySelector,
    (todoList, status, searchText, priority) => {
        //status => 'All' , 'Completed' ,'To do' 
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priority.length ? todo.name.includes(searchText) && priority.includes(todo.priority) : todo.name.includes(searchText)
            }
            return todo.name.includes(searchText) && (
                status !== 'All' && status === 'Completed' ? todo.completed : !todo.completed
            ) && (priority.length ? priority.includes(todo.priority) : true)
        })
    })
