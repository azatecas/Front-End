import { FETCH_FLOWS, UPDATING, GET_FLOW, DELETE_PAGE } from '../actions';

export const initialState = {
    isUpdating: false,
    pageUpdating: false,
    flows: [],
    flow: {
        pages: []
    }
}

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATING:
            return {
                ...state,
                isUpdating: !state.isUpdating
            }
        case FETCH_FLOWS:
            return {
                ...state,
                flows: action.payload,
            }
        case GET_FLOW:
            return {
                ...state,
                flow: action.payload
            }
        case DELETE_PAGE:
            return {
                ...state,
                pageUpdating: !state.pageUpdating
            }
        default:
            return state;
    }
}