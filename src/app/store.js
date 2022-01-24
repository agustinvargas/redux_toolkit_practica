import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import notifySlice from '../features/notification/notifySlice';
import userSlice from '../features/users/userSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notify: notifySlice,
    user: userSlice,
  },
});
