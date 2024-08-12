import { ITodo } from "../Interface"

export const addTodo = (data: ITodo) => {
    return {
        type: 'toDoList/addTodo',
        payload: data
    }
}
export const toggleTodoStatus = (id: string) => {
    return {
        type: 'toDoList/toggleTodoStatus',
        payload: id
    }
}

export const searchfilterChange = (data: string) => {
    return {
        type: 'filter/searchFilterChange',
        payload: data
    }
}

export const statusfilterChange = (status: string) => {
    return {
        type: 'filter/statusFilterChange',
        payload: status
    }
}
export const priorityfilterChange = (priority: string[]) => {
    return {
        type: 'filter/priorityfilterChange',
        payload: priority
    }
}