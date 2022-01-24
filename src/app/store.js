import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import notifySlice from '../features/notification/notifySlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notify: notifySlice,
  },
});
