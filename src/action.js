import { fetchPostsStart, fetchPostsSuccess, fetchPostsError } from './reducer';

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsStart());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      dispatch(fetchPostsError(error.message));
    }
  };
};
