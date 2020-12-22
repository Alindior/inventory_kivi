import axios from 'axios';

import { UsersAction } from './usersAction';

const usersLoaded = (users: any) => ({
  type: UsersAction.GET_USERS,
  payload: users,
});

export const loadUsers = () => async (dispatch: any) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch(usersLoaded(data));
};
