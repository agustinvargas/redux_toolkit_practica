import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { add } from '../notification/notifySlice';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [],
  },
  reducers: {
    get: (state, action) => {
      state.list = action.payload;
    },
    remove: (state) => {
      state.list = [];
    },
  },
});

export const gettingUsers = () => (dispatch) => {
  //   const dispatchNotify = useDispatch();
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => dispatch(get(response.data)))
    .catch((e) =>
      dispatch(
        add({
          title: 'Erorr api',
          body: e.toString(),
        })
      )
    );
};
export const selectUser = (state) => state.user;
export const { get, remove } = userSlice.actions;

export default userSlice.reducer;
