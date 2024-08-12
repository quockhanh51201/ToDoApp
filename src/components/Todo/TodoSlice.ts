
import { IAction, ITodo } from "../../Interface"
import { KeyListToDo } from "../../key/LocalStorage";
import { loadStateFromLocalStorage } from "../../utils";

const localTodoList = loadStateFromLocalStorage(KeyListToDo)
const initState: ITodo[] = [
    ...localTodoList
    // { id: '0', name: 'Learn react', completed: false, priority: 'Low' },
    // { id: '3', name: 'Learn react', completed: true, priority: 'Medium' },
    // { id: '4', name: 'Learn xx', completed: true, priority: 'High' },
]

const todoReducer = (state: ITodo[] = initState, action: IAction): ITodo[] => {
    switch (action.type) {
        case 'toDoList/addTodo':
            return [
                ...state,
                action.payload
            ];

        case 'toDoList/toggleTodoStatus':
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)

        default:
            return state;
    }
}

export default todoReducer;
