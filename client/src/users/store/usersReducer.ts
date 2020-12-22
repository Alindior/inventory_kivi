import { UsersAction } from './usersAction';

export default (state = { users: [] }, action: any) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case UsersAction.GET_USERS: {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
};
