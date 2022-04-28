import ChangePage from './ChangePage';
import { combineReducers } from 'redux';
import SendAnimation from './SendAnimation';
import ViewChange from './ViewChange';

const rootReducer = combineReducers({
     ChangePage: ChangePage,
     SendAnimation: SendAnimation,
     ViewChange:ViewChange,
    })

export default rootReducer;