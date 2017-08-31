import actionCreator from 'actionCreator';

const LOAD = 'app-like-ducks/posts/LOAD';
const REMOVE = 'app-like-ducks/posts/REMOVE';
const UP_COUNTER = 'app-like-ducks/posts/UP_COUNTER';
const DOWN_COUNTER = 'app-like-ducks/posts/DOWN_COUNTER';

const initialState = [];

// Reducers

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case LOAD :
            return state.concat(action.data);
        case REMOVE:
            return [
                ...state.slice(0, action.data),
                ...state.slice(action.data + 1)
            ];
        case UP_COUNTER:
            return [
                ...state.slice(0, action.data),
                {...state[action.data], counter: state[action.data].counter + 1},
                ...state.slice(action.data + 1)
            ];
        case DOWN_COUNTER:
            return [
                ...state.slice(0, action.data),
                {...state[action.data], counter: state[action.data].counter - 1},
                ...state.slice(action.data + 1)
            ];
        default:
            return state;
    }
};

// Actions

export const initialLoad = actionCreator(LOAD);
export const removePost = actionCreator(REMOVE);
export const up = actionCreator(UP_COUNTER);
export const down = actionCreator(DOWN_COUNTER);