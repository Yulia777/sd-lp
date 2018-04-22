import {CALLBACK, GET_IDEA, ORDER, FORM_MINI} from '../actions/constants';

const initialState = {
    isCallbackNotification: false,
    isGetIdeaNotification: false,
    isOrderNotification: false,
    isFormMini: false
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALLBACK:
            return Object.assign({}, state, {isCallbackNotification: action.payload});
        case GET_IDEA:
            return Object.assign({}, state, {isGetIdeaNotification: action.payload});
        case ORDER:
            return Object.assign({}, state, {isOrderNotification: action.payload});
        case FORM_MINI:
            return Object.assign({}, state, {isFormMini: action.payload});
    }
    return state;
};