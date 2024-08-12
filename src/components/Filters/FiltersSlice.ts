import { IAction, IFilter } from "../../Interface"

const initState: IFilter = {
    search: '',
    status: 'All',
    priority: []
}
const filtersReducer = (state: IFilter = initState, action: IAction): IFilter => {
    switch (action.type) {
        case 'filter/searchFilterChange':
            return {
                ...state,
                search: action.payload
            }
        case 'filter/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filter/priorityfilterChange':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state
    }

}
export default filtersReducer