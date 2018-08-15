import { combineReducers } from 'redux';
import arrWordsReducer from './arrWordsReducer';

const reducer = combineReducers({
    arrWords: arrWordsReducer,
})

export default reducer;