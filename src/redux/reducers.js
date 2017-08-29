import { combineReducers } from 'redux';

const initialState = {
    posts: []
}

function postsReducer(state = initialState.posts, action = {}) {
    switch (action.type) {
        case 'INITIAL_LOAD':
            return state.concat(action.posts);
        case 'REMOVE_POST':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const reducer = combineReducers({
    posts: postsReducer
});

export default reducer;