import {postJson} from "../utils/ajax";
import {CALLBACK, GET_IDEA, ORDER, FORM_MINI} from './constants';

export const callbackSuccess = (response) => {
    return{
        type: CALLBACK,
        payload: response
    }
};

export const getIdeaSuccess = (response) => {
    return {
        type: GET_IDEA,
        payload: response
    }
};

export const orderSuccess = (response) => {
    return {
        type: ORDER,
        payload: response
    }
};

export const formSuccess = (response) => {
    return {
        type: FORM_MINI,
        payload: response
    }
};




export const sendCallback = (formData) => {
    return dispatch => {
        return postJson('backend/send_lids.php', formData)
            .then(json => {
                dispatch(callbackSuccess(json.response));
            }).catch(error => console.log(error))
    }
};

export const sendEmail = (formData) => {
    return dispatch => {
        return postJson('backend/send_lids.php', formData)
            .then(json => {
                switch (formData.type) {
                    case 'email':
                        dispatch(getIdeaSuccess(json.response));
                        break;
                    case 'order-category':
                        dispatch(orderSuccess(json.response));
                        break;
                    case 'form-mini':
                        dispatch(formSuccess(json.response));
                        break;
                }
            }).catch(error => console.log(error))
    }
};