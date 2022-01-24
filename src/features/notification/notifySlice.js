import { createSlice } from '@reduxjs/toolkit';

export const notifySlice = createSlice({
  name: 'notify',
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    },
    remove: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const selectNotify = (state) => state.notify;
export const { add, remove } = notifySlice.actions;
export default notifySlice.reducer;
