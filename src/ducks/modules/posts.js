const LOAD = 'app-like-ducks/posts/LOAD';
const REMOVE = 'app-like-ducks/posts/REMOVE';

const initialState = [];

// Reducers

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case LOAD :
            return state.concat(action.posts);
        case REMOVE:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
};

// Actions

export function initialLoad(posts) {
  return {
    type: LOAD,
    posts
  };
}

export function removePost(index) {
  return {
    type: REMOVE,
    index
  };
}