import { FETCH_FLOWS, UPDATING, GET_FLOW } from '../actions';

export const initialState = {
    isUpdating: false,
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
                isUpdating: true
            }
        case FETCH_FLOWS:
            return {
                ...state,
                flows: action.payload,
                isUpdating: false
            }
        case GET_FLOW:
            return {
                ...state,
                flow: action.payload
            }
        default:
            return state;
    }
}