import { combineReducers } from 'redux';
import arrWordsReducer from './arrWordsReducer';
import isAddingReducer from './isAddingReducer';

const reducer = combineReducers({
    arrWords: arrWordsReducer,
    isAdding: isAddingReducer,
})

export default reducer;