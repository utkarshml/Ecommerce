/**
 * The above function is an asynchronous action that makes a GET request to retrieve all products and
 * dispatches different actions based on the success or failure of the request.
 * 
 * Args:
 *   dispatch: The `dispatch` parameter is a function that is used to dispatch actions to the Redux
 * store. It is typically provided by the Redux library and is used to update the state of the
 * application.
 */

import { ALL_CLEAR_REQUEST, ALL_REQUEST_ERROR, ALL_REQUEST_PROCCESS, ALL_REQUEST_SUCCESS } from '../constants/contants';
import axios from 'axios';



export const allProduct = async (dispatch) => {
    try {
        dispatch({ type: ALL_REQUEST_PROCCESS })
        const { data } = await axios.get(`http://127.0.0.1:4000/v1/api/products`)
        dispatch({ type: ALL_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ALL_REQUEST_ERROR, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}

export const clearError = () => async (dispatch) => {
    dispatch({ type: ALL_CLEAR_REQUEST })
}

