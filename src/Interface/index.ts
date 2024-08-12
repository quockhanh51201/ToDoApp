export interface ITodo {
    id: string;
    name: string;
    completed: boolean;
    priority: string //'Low' | 'Medium' | 'High';
}

export interface IFilter {
    search: string;
    status: string //'All' | 'Completed' | 'Incomplete';
    priority: string[];
}

export interface IState {
    filters: IFilter;
    todoList: ITodo[];
}

export interface IAction {
    type: string;
    payload?: any;
}

