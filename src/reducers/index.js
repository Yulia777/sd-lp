import { combineReducers } from 'redux';

import {mainReducer} from './main.reducer';


const reducers = combineReducers({
    mainReducer: mainReducer
});

export default reducers;