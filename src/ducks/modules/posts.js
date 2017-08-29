const LOAD = 'app-like-ducks/posts/LOAD';
const REMOVE = 'app-like-ducks/posts/REMOVE';
const UP_COUNTER = 'app-like-ducks/posts/UP_COUNTER';
const DOWN_COUNTER = 'app-like-ducks/posts/DOWN_COUNTER';

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
        case UP_COUNTER:
            return [
                ...state.slice(0, action.index),
                {...state[action.index], counter: state[action.index].counter + 1},
                ...state.slice(action.index + 1)
            ];
        case DOWN_COUNTER:
            return [
                ...state.slice(0, action.index),
                {...state[action.index], counter: state[action.index].counter - 1},
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

export function up(index) {
  return {
    type: UP_COUNTER,
    index
  };
}

export function down(index) {
  return {
    type: DOWN_COUNTER,
    index
  };
}