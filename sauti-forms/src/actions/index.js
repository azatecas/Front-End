import { axiosWithAuth } from "../axiosAuth"

export const FETCH_FLOWS = "FETCH_FLOWS";
export const UPDATING = "UPDATING";
export const GET_FLOW = "GET_FLOW";

export const getFlows = () => dispatch => {
    const id = localStorage.getItem("id");
    return axiosWithAuth().get(`https://sauti-studio-3.herokuapp.com/api/users/${id}/flows`)
    .then(res => {
        dispatch({ type: FETCH_FLOWS, payload: res.data })
    })
    .catch(err => {
        console.log(err);
    })
}

export const addFlow = (flow) => dispatch => {
    const id = localStorage.getItem("id");
    return axiosWithAuth().post(`https://sauti-studio-3.herokuapp.com/api/users/${id}/flows`, flow)
    .then(() => {
        dispatch({ type: UPDATING });
        getFlows();
    })
    .catch(err => {
        console.log(err);
    })
}

export const getFlow = id => dispatch => {
    return axiosWithAuth().get(`https://sauti-studio-3.herokuapp.com/api/users/flows/${id}`)
    .then(res => {
        dispatch({ type: GET_FLOW, payload: res.data })
    })
    .catch(err => {
        console.log(err);
    })
}