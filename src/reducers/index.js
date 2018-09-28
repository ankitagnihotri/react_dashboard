import {combineReducers} from 'redux';
import MainReducers from './MainReducer';
export default combineReducers({
    main: MainReducers
});