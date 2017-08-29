function initialLoad(posts) {
  return {
    type: 'INITIAL_LOAD',
    posts
  };
}

function initial(data) {
  return dispatch => {
    dispatch(initialLoad(data));
  }
}

function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index
  }
}

function remove(index) {
  return (dispatch, getState) => {
    const { posts } = getState();

    if (posts.length > 0 && index < posts.length) {
      dispatch(removePost(index));
    }
  }
}

export default {
    initialLoad,
    initial,
    remove
};